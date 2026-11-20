import {useEffect, useRef, useState} from 'react';
import {geoEquirectangular, geoPath} from 'd3-geo';
import {Maximize2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import type {CountryFeature} from '@/lib/world-geography';

export function AlbumGlobe({features, visited, onOpen}: {features: CountryFeature[]; visited: Set<string>; onOpen: () => void}) {
  const host = useRef<HTMLDivElement>(null);
  const start = useRef<{x: number; y: number} | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    Promise.all([import('three'), import('three/addons/controls/OrbitControls.js')]).then(([THREE, {OrbitControls}]) => {
      if (disposed) return;
      const textureCanvas = document.createElement('canvas');
      textureCanvas.width = 2048; textureCanvas.height = 1024;
      const context = textureCanvas.getContext('2d');
      if (!context) throw new Error('Canvas unavailable');
      const tokens = getComputedStyle(element);
      const ocean = tokens.getPropertyValue('--map-ocean').trim();
      const land = tokens.getPropertyValue('--map-land').trim();
      const borders = tokens.getPropertyValue('--map-border').trim();
      const highlight = tokens.getPropertyValue('--primary').trim();
      context.fillStyle = ocean; context.fillRect(0, 0, 2048, 1024);
      const projection = geoEquirectangular().scale(2048 / (2 * Math.PI)).translate([1024, 512]);
      const path = geoPath(projection, context);
      features.forEach(country => {
        context.beginPath(); path(country);
        context.fillStyle = visited.has(country.properties.name) ? highlight : land;
        context.fill(); context.strokeStyle = borders; context.lineWidth = 1.3; context.stroke();
      });
      const texture = new THREE.CanvasTexture(textureCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const scene = new THREE.Scene();
      const geometry = new THREE.SphereGeometry(1, 64, 48);
      const material = new THREE.MeshBasicMaterial({map: texture});
      scene.add(new THREE.Mesh(geometry, material));
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      // Start with Europe and Africa facing the viewer.
      camera.position.set(2.8, 1.6, 0.9);
      const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.setAttribute('aria-hidden', 'true');
      element.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false; controls.enablePan = false;
      controls.enableDamping = true;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      controls.autoRotate = !motion.matches; controls.autoRotateSpeed = 0.35;
      const onMotion = () => {controls.autoRotate = !motion.matches;};
      motion.addEventListener('change', onMotion);
      const resize = new ResizeObserver(() => {
        camera.aspect = element.clientWidth / element.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(element.clientWidth, element.clientHeight);
      });
      resize.observe(element);
      renderer.setAnimationLoop(() => {controls.update(); renderer.render(scene, camera);});
      cleanup = () => {
        renderer.setAnimationLoop(null); resize.disconnect(); controls.dispose();
        motion.removeEventListener('change', onMotion);
        geometry.dispose(); material.dispose(); texture.dispose(); renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {if (!disposed) setFailed(true);});
    return () => {disposed = true; cleanup();};
  }, [features, visited]);
  return <div className="relative mx-auto w-full max-w-2xl">
    <div ref={host} className="album-globe h-[340px] w-full cursor-grab touch-none active:cursor-grabbing sm:h-[400px]"
      onPointerDown={event => {start.current = {x: event.clientX, y: event.clientY};}}
      onPointerCancel={() => {start.current = null;}}
      onPointerUp={event => {
        const point = start.current; start.current = null;
        if (point && Math.hypot(event.clientX - point.x, event.clientY - point.y) < 8) onOpen();
      }}/>
    <Button variant="outline" className="absolute bottom-3 right-0 bg-background" onClick={onOpen} aria-label="Otwórz mapę na pełnym ekranie" title="Otwórz mapę na pełnym ekranie"><Maximize2/>Pełna mapa</Button>
    {failed && <p role="status" className="absolute left-0 top-1/2 text-sm text-muted-foreground">Globus jest niedostępny na tym urządzeniu.</p>}
  </div>;
}