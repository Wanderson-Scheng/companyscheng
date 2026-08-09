CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  subject text,
  message text NOT NULL,
  locale text,
  source text NOT NULL DEFAULT 'scheng',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages contact messages"
ON public.contact_messages FOR ALL TO service_role
USING (true) WITH CHECK (true);