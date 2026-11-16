CREATE TABLE public.couples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invite_code text NOT NULL UNIQUE DEFAULT upper(substr(md5(random()::text),1,6)),
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.couples TO authenticated;
GRANT ALL ON public.couples TO service_role;
ALTER TABLE public.couples ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.couple_members (
  couple_id uuid NOT NULL REFERENCES public.couples(id) ON DELETE CASCADE,
  user_id uuid NOT NULL UNIQUE,
  joined_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (couple_id, user_id)
);
GRANT SELECT ON public.couple_members TO authenticated;
GRANT ALL ON public.couple_members TO service_role;
ALTER TABLE public.couple_members ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.my_couple_id()
RETURNS uuid LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT couple_id FROM public.couple_members WHERE user_id = auth.uid() LIMIT 1
$$;

CREATE POLICY "members read couple" ON public.couples FOR SELECT TO authenticated USING (id = public.my_couple_id());
CREATE POLICY "members read members" ON public.couple_members FOR SELECT TO authenticated USING (couple_id = public.my_couple_id());

CREATE OR REPLACE FUNCTION public.create_couple()
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'not signed in'; END IF;
  IF public.my_couple_id() IS NOT NULL THEN RETURN public.my_couple_id(); END IF;
  INSERT INTO public.couples(created_by) VALUES (auth.uid()) RETURNING id INTO cid;
  INSERT INTO public.couple_members(couple_id,user_id) VALUES (cid, auth.uid());
  RETURN cid;
END $$;

CREATE OR REPLACE FUNCTION public.join_couple(_code text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid; cnt int;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'not signed in'; END IF;
  IF public.my_couple_id() IS NOT NULL THEN RAISE EXCEPTION 'already in couple'; END IF;
  SELECT id INTO cid FROM public.couples WHERE invite_code = upper(trim(_code));
  IF cid IS NULL THEN RAISE EXCEPTION 'invalid code'; END IF;
  SELECT count(*) INTO cnt FROM public.couple_members WHERE couple_id = cid;
  IF cnt >= 2 THEN RAISE EXCEPTION 'couple full'; END IF;
  INSERT INTO public.couple_members(couple_id,user_id) VALUES (cid, auth.uid());
  RETURN cid;
END $$;
REVOKE EXECUTE ON FUNCTION public.create_couple() FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.join_couple(text) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.create_couple() TO authenticated;
GRANT EXECUTE ON FUNCTION public.join_couple(text) TO authenticated;

CREATE TABLE public.memories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  couple_id uuid NOT NULL REFERENCES public.couples(id) ON DELETE CASCADE,
  created_by uuid NOT NULL DEFAULT auth.uid(),
  country text NOT NULL,
  date_on date NOT NULL DEFAULT current_date,
  note text,
  rating smallint CHECK (rating BETWEEN 1 AND 5),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.memories TO authenticated;
GRANT ALL ON public.memories TO service_role;
ALTER TABLE public.memories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "couple all memories" ON public.memories FOR ALL TO authenticated
  USING (couple_id = public.my_couple_id()) WITH CHECK (couple_id = public.my_couple_id());

CREATE TABLE public.memory_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  memory_id uuid NOT NULL REFERENCES public.memories(id) ON DELETE CASCADE,
  couple_id uuid NOT NULL REFERENCES public.couples(id) ON DELETE CASCADE,
  path text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, DELETE ON public.memory_photos TO authenticated;
GRANT ALL ON public.memory_photos TO service_role;
ALTER TABLE public.memory_photos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "couple all photos" ON public.memory_photos FOR ALL TO authenticated
  USING (couple_id = public.my_couple_id()) WITH CHECK (couple_id = public.my_couple_id());

CREATE POLICY "couple read files" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'memories' AND (storage.foldername(name))[1] = public.my_couple_id()::text);
CREATE POLICY "couple upload files" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'memories' AND (storage.foldername(name))[1] = public.my_couple_id()::text);
CREATE POLICY "couple delete files" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'memories' AND (storage.foldername(name))[1] = public.my_couple_id()::text);