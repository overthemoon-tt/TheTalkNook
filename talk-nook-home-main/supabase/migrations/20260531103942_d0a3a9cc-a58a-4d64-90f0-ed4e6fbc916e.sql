
-- Role enum + table
CREATE TYPE public.app_role AS ENUM ('admin', 'listener', 'navigator');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "users read own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Bookings
CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  reference_code text NOT NULL UNIQUE DEFAULT upper(substring(replace(gen_random_uuid()::text,'-','') from 1 for 8)),
  user_name text NOT NULL,
  is_anonymous boolean NOT NULL DEFAULT false,
  session_type text NOT NULL CHECK (session_type IN ('text_peer','voice_peer','text_health')),
  user_note text,
  bkash_transaction_id text NOT NULL,
  status text NOT NULL DEFAULT 'pending_verification' CHECK (status IN ('pending_verification','confirmed','cancelled','completed')),
  chat_id uuid,
  listener_id uuid,
  meet_link text
);
GRANT SELECT, INSERT ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can create a booking
CREATE POLICY "anyone can create booking" ON public.bookings
  FOR INSERT TO anon, authenticated WITH CHECK (true);
-- Anyone can look up a booking by reference (used by user to find their chat) - we'll filter client-side
CREATE POLICY "public can read bookings" ON public.bookings
  FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin can update bookings" ON public.bookings
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "admin can delete bookings" ON public.bookings
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- Chat sessions
CREATE TABLE public.chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting','active','ended')),
  listener_joined_at timestamptz,
  session_started_at timestamptz,
  session_ended_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.chat_sessions TO anon, authenticated;
GRANT ALL ON public.chat_sessions TO service_role;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone read chat_sessions" ON public.chat_sessions FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "anyone insert chat_sessions" ON public.chat_sessions FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "anyone update chat_sessions" ON public.chat_sessions FOR UPDATE TO anon, authenticated USING (true);

-- Chat messages
CREATE TABLE public.chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id uuid NOT NULL REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  sender_role text NOT NULL CHECK (sender_role IN ('user','listener','system')),
  sender_display_name text NOT NULL DEFAULT 'Anonymous',
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.chat_messages TO anon, authenticated;
GRANT ALL ON public.chat_messages TO service_role;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone read chat_messages" ON public.chat_messages FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "anyone insert chat_messages" ON public.chat_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE INDEX chat_messages_chat_id_created_idx ON public.chat_messages(chat_id, created_at);

-- Applications & inquiries
CREATE TABLE public.listener_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  age int,
  city text,
  motivation text,
  experience text,
  availability text,
  status text NOT NULL DEFAULT 'submitted' CHECK (status IN ('submitted','under_review','approved','rejected'))
);
GRANT SELECT, INSERT ON public.listener_applications TO anon, authenticated;
GRANT ALL ON public.listener_applications TO service_role;
ALTER TABLE public.listener_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone insert listener_app" ON public.listener_applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admin read listener_app" ON public.listener_applications FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "admin update listener_app" ON public.listener_applications FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.navigator_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  medical_school text,
  year_of_study text,
  motivation text,
  availability text,
  status text NOT NULL DEFAULT 'submitted' CHECK (status IN ('submitted','under_review','approved','rejected'))
);
GRANT SELECT, INSERT ON public.navigator_applications TO anon, authenticated;
GRANT ALL ON public.navigator_applications TO service_role;
ALTER TABLE public.navigator_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone insert nav_app" ON public.navigator_applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admin read nav_app" ON public.navigator_applications FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "admin update nav_app" ON public.navigator_applications FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  organization text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  message text
);
GRANT SELECT, INSERT ON public.partnership_inquiries TO anon, authenticated;
GRANT ALL ON public.partnership_inquiries TO service_role;
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone insert partnership" ON public.partnership_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admin read partnership" ON public.partnership_inquiries FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL
);
GRANT SELECT, INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone insert contact" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admin read contact" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- Stats
CREATE TABLE public.stats (
  id int PRIMARY KEY DEFAULT 1,
  sessions_held int NOT NULL DEFAULT 0,
  people_heard int NOT NULL DEFAULT 0,
  listeners_active int NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT stats_singleton CHECK (id = 1)
);
GRANT SELECT ON public.stats TO anon, authenticated;
GRANT ALL ON public.stats TO service_role;
ALTER TABLE public.stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone read stats" ON public.stats FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin write stats" ON public.stats FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

INSERT INTO public.stats (id, sessions_held, people_heard, listeners_active) VALUES (1, 0, 0, 0);

-- Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_sessions;
ALTER TABLE public.chat_messages REPLICA IDENTITY FULL;
ALTER TABLE public.chat_sessions REPLICA IDENTITY FULL;
