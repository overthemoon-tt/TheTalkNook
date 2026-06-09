CREATE INDEX IF NOT EXISTS bookings_status_created_at_idx ON public.bookings (status, created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON public.bookings (created_at DESC);