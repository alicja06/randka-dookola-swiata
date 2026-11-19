
import { useEffect, useMemo, useRef, useState } from 'react';
import type {
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature, Geometry } from 'geojson';

type F = Feature<Geometry, { name: string }>;
type Point = { x: number; y: number };

const W = 960;
const H = 500;
const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

export function WorldMap({
  visited,
  onSelect,
}: {
  visited: Set<string>;
  onSelect: (geo: string) => void;
}) {
  const [features, setFeatures] = useState<F[] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });

  const pointers = useRef(new Map<number, Point>());

  const dragStart = useRef<{
    point: Point;
    offset: Point;
  } | null>(null);

  const gestureStart = useRef<{
    distance: number;
    zoom: number;
    worldAnchor: Point;
  } | null>(null);

  const moved = useRef(false);
  const suppressClick = useRef(false);
  const suppressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let active = true;

    import('world-atlas/countries-50m.json').then(m => {
      const t = (m.default ?? m) as any;
      const fc = feature(t, t.objects.countries) as any;

      if (active) {
        setFeatures(
          fc.features.filter(
            (f: F) => f.properties.name !== 'Antarctica',
          ),
        );
      }
    });

    return () => {
      active = false;
      if (suppressTimer.current) {
        clearTimeout(suppressTimer.current);
      }
    };
  }, []);

  const projection = useMemo(
    () =>
      geoNaturalEarth1()
        .scale(175)
        .translate([W / 2, H / 2 + 20]),
    [],
  );

  const path = useMemo(() => geoPath(projection), [projection]);

  const distance = (a: Point, b: Point) =>
    Math.hypot(a.x - b.x, a.y - b.y);

  const midpoint = (a: Point, b: Point): Point => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  });

  const clampOffset = (next: Point, nextZoom: number): Point => {
    const maxX = (W * (nextZoom - 1)) / 2;
    const maxY = (H * (nextZoom - 1)) / 2;

    return {
      x: Math.max(-maxX, Math.min(maxX, next.x)),
      y: Math.max(-maxY, Math.min(maxY, next.y)),
    };
  };

  const getLocalPoint = (
    event: ReactPointerEvent<SVGSVGElement>,
  ): Point => {
    const rect = event.currentTarget.getBoundingClientRect();

    return {
      x: ((event.clientX - rect.left) / rect.width) * W,
      y: ((event.clientY - rect.top) / rect.height) * H,
    };
  };

  const changeZoom = (nextZoom: number) => {
    const bounded = Math.max(
      MIN_ZOOM,
      Math.min(MAX_ZOOM, nextZoom),
    );

    setZoom(bounded);
    setOffset(current => clampOffset(current, bounded));
  };

    const handleWheel = (event: ReactWheelEvent<SVGSVGElement>) => {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();

    const cursor = {
      x: ((event.clientX - rect.left) / rect.width) * W,
      y: ((event.clientY - rect.top) / rect.height) * H,
    };

    const worldAnchor = {
      x: W / 2 + (cursor.x - W / 2 - offset.x) / zoom,
      y: H / 2 + (cursor.y - H / 2 - offset.y) / zoom,
    };

    const factor = Math.exp(-event.deltaY * 0.002);
    const nextZoom = Math.max(
      MIN_ZOOM,
      Math.min(MAX_ZOOM, zoom * factor),
    );

    const nextOffset = {
      x: cursor.x - W / 2 -
        nextZoom * (worldAnchor.x - W / 2),
      y: cursor.y - H / 2 -
        nextZoom * (worldAnchor.y - H / 2),
    };

    setZoom(nextZoom);
    setOffset(clampOffset(nextOffset, nextZoom));
  };

  const handlePointerDown = (
    event: ReactPointerEvent<SVGSVGElement>,
  ) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    if (pointers.current.size === 0) {
      moved.current = false;
      suppressClick.current = false;

      if (suppressTimer.current) {
        clearTimeout(suppressTimer.current);
        suppressTimer.current = null;
      }
    }

    const point = getLocalPoint(event);
    pointers.current.set(event.pointerId, point);

    if (pointers.current.size === 1) {
      dragStart.current = {
        point,
        offset,
      };
    }

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values());
      const center = midpoint(a, b);

      gestureStart.current = {
        distance: distance(a, b),
        zoom,
        worldAnchor: {
          x: W / 2 + (center.x - W / 2 - offset.x) / zoom,
          y: H / 2 + (center.y - H / 2 - offset.y) / zoom,
        },
      };

      dragStart.current = null;
    }
  };

  const handlePointerMove = (
    event: ReactPointerEvent<SVGSVGElement>,
  ) => {
    if (!pointers.current.has(event.pointerId)) return;

    const point = getLocalPoint(event);
    const previous = pointers.current.get(event.pointerId)!;

    pointers.current.set(event.pointerId, point);

    if (pointers.current.size === 1 && dragStart.current) {
      const start = dragStart.current;
      const dx = point.x - start.point.x;
      const dy = point.y - start.point.y;

      if (Math.hypot(dx, dy) > 5) {
        moved.current = true;
      }

      if (zoom > 1 && moved.current) {
        setOffset(
          clampOffset(
            {
              x: start.offset.x + dx,
              y: start.offset.y + dy,
            },
            zoom,
          ),
        );
      }

      return;
    }

    if (pointers.current.size === 2 && gestureStart.current) {
      const [a, b] = Array.from(pointers.current.values());
      const center = midpoint(a, b);
      const currentDistance = distance(a, b);
      const start = gestureStart.current;

      if (
        Math.abs(currentDistance - start.distance) > 3 ||
        distance(center, midpoint(previous, point)) > 3
      ) {
        moved.current = true;
      }

      const nextZoom = Math.max(
        MIN_ZOOM,
        Math.min(
          MAX_ZOOM,
          start.zoom * (currentDistance / start.distance),
        ),
      );

      const nextOffset = {
        x: center.x - W / 2 -
          nextZoom * (start.worldAnchor.x - W / 2),
        y: center.y - H / 2 -
          nextZoom * (start.worldAnchor.y - H / 2),
      };

      setZoom(nextZoom);
      setOffset(clampOffset(nextOffset, nextZoom));
    }
  };

  const handlePointerUp = (
    event: ReactPointerEvent<SVGSVGElement>,
  ) => {
    pointers.current.delete(event.pointerId);

    if (moved.current) {
      suppressClick.current = true;

      if (suppressTimer.current) {
        clearTimeout(suppressTimer.current);
      }

      suppressTimer.current = setTimeout(() => {
        suppressClick.current = false;
        suppressTimer.current = null;
      }, 500);
    }

    gestureStart.current = null;

    if (pointers.current.size === 1) {
      const [remainingId, remainingPoint] =
        Array.from(pointers.current.entries())[0];

      dragStart.current = {
        point: remainingPoint,
        offset,
      };
    } else {
      dragStart.current = null;
    }

    if (pointers.current.size === 0) {
      moved.current = false;
    }
  };

  const handleClickCapture = (
    event: React.MouseEvent<SVGSVGElement>,
  ) => {
    if (suppressClick.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick.current = false;

      if (suppressTimer.current) {
        clearTimeout(suppressTimer.current);
        suppressTimer.current = null;
      }
    }
  };

  if (!features) {
    return (
      <div className="aspect-[96/50] w-full rounded-lg bg-muted/40 animate-pulse" />
    );
  }

  const hits = features.filter(f =>
    visited.has(f.properties.name),
  );

  return (
    <div className="w-full">
      <div className="flex justify-end gap-2 mb-3">
        <button
          type="button"
          className="size-10 rounded-md border bg-card text-xl disabled:opacity-40"
          aria-label="Pomniejsz mapę"
          disabled={zoom <= MIN_ZOOM}
          onClick={() => changeZoom(zoom / 1.5)}
        >
          −
        </button>

        <button
          type="button"
          className="size-10 rounded-md border bg-card text-xl disabled:opacity-40"
          aria-label="Powiększ mapę"
          disabled={zoom >= MAX_ZOOM}
          onClick={() => changeZoom(zoom * 1.5)}
        >
          +
        </button>

        <button
          type="button"
          className="px-3 rounded-md border bg-card text-sm"
          onClick={() => {
            setZoom(1);
            setOffset({ x: 0, y: 0 });
          }}
        >
          Reset
        </button>
      </div>

      <div className="w-full overflow-hidden rounded-lg">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto touch-none select-none"
          role="img"
          aria-label="Mapa odwiedzonych krajów"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={handleClickCapture}
          onWheel={handleWheel}
        >
          <g
            transform={`translate(${W / 2 + offset.x} ${H / 2 + offset.y}) scale(${zoom}) translate(${-W / 2} ${-H / 2})`}
          >
            {features.map((f, i) => {
              const isVisited = visited.has(f.properties.name);

              return (
                <path
                  key={i}
                  d={path(f) ?? ''}
                  className={
                    isVisited
                      ? 'fill-primary stroke-background cursor-pointer hover:opacity-80'
                      : 'fill-muted stroke-background'
                  }
                  strokeWidth={0.4 / zoom}
                  onClick={
                    isVisited
                      ? () => {
                          if (!suppressClick.current) {
                            onSelect(f.properties.name);
                          }
                        }
                      : undefined
                  }
                />
              );
            })}

            {hits.map(f => {
              const c = path.centroid(f as any);
              const area = path.area(f as any);

              if (area > 40 || !Number.isFinite(c[0])) {
                return null;
              }

              return (
                <g key={f.properties.name}>
                  <circle
                    cx={c[0]}
                    cy={c[1]}
                    r={14 / zoom}
                    fill="transparent"
                    pointerEvents="all"
                    onClick={() => {
                      if (!suppressClick.current) {
                        onSelect(f.properties.name);
                      }
                    }}
                  />

                  <circle
                    cx={c[0]}
                    cy={c[1]}
                    r={4 / zoom}
                    className="fill-primary stroke-background pointer-events-none"
                    strokeWidth={1.5 / zoom}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
