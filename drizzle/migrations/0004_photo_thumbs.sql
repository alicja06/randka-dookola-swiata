ALTER TABLE public.memory_photos ADD COLUMN thumb_path text;
GRANT UPDATE (thumb_path) ON public.memory_photos TO authenticated;