ALTER TABLE public.couples ALTER COLUMN invite_code SET DEFAULT upper(replace(gen_random_uuid()::text, '-', ''));
ALTER TABLE public.memories ADD CONSTRAINT memories_id_couple_unique UNIQUE (id, couple_id);
ALTER TABLE public.memory_photos ADD CONSTRAINT photo_memory_same_couple FOREIGN KEY (memory_id, couple_id) REFERENCES public.memories(id, couple_id) ON DELETE CASCADE;
CREATE OR REPLACE FUNCTION public.create_couple() RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid;
BEGIN
IF auth.uid() IS NULL THEN RAISE EXCEPTION 'not signed in'; END IF;
PERFORM pg_advisory_xact_lock(hashtextextended(auth.uid()::text,0));
cid := public.my_couple_id();
IF cid IS NOT NULL THEN RETURN cid; END IF;
INSERT INTO public.couples(created_by) VALUES (auth.uid()) RETURNING id INTO cid;
INSERT INTO public.couple_members(couple_id,user_id) VALUES (cid,auth.uid());
RETURN cid;
END $$;
CREATE OR REPLACE FUNCTION public.join_couple(_code text) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid;
BEGIN
IF auth.uid() IS NULL THEN RAISE EXCEPTION 'not signed in'; END IF;
PERFORM pg_advisory_xact_lock(hashtextextended(auth.uid()::text,0));
IF public.my_couple_id() IS NOT NULL THEN RAISE EXCEPTION 'already in couple'; END IF;
SELECT id INTO cid FROM public.couples WHERE invite_code=upper(trim(_code)) FOR UPDATE;
IF cid IS NULL THEN RAISE EXCEPTION 'invalid code'; END IF;
IF (SELECT count(*) FROM public.couple_members WHERE couple_id=cid)>=2 THEN RAISE EXCEPTION 'couple full'; END IF;
INSERT INTO public.couple_members(couple_id,user_id) VALUES(cid,auth.uid());
RETURN cid;
END $$;
REVOKE EXECUTE ON FUNCTION public.my_couple_id() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.my_couple_id() TO authenticated;