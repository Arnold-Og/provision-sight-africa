-- Run this in Supabase Dashboard → SQL Editor to create tables and RLS for feedback forms.

-- Contact form submissions (Get In Touch / Contact page)
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- User testing signups (Join Mission / Home)
create table if not exists public.user_testing_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text,
  role text not null,
  location text not null,
  created_at timestamptz not null default now()
);

-- RLS: allow anonymous insert only (no read/update/delete for anon)
alter table public.contact_submissions enable row level security;
alter table public.user_testing_signups enable row level security;

drop policy if exists "Allow anonymous insert on contact_submissions" on public.contact_submissions;
create policy "Allow anonymous insert on contact_submissions"
  on public.contact_submissions for insert to anon with check (true);

drop policy if exists "Allow anonymous insert on user_testing_signups" on public.user_testing_signups;
create policy "Allow anonymous insert on user_testing_signups"
  on public.user_testing_signups for insert to anon with check (true);
