-- Run this in your Supabase SQL Editor

-- [Update] Added japan_impact column
create table if not exists articles (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  original_title text,
  url text unique not null,
  source_domain text,
  published_at timestamptz,
  summary_points jsonb, -- Stores string array
  importance text,      -- Local perspective
  japan_impact text,    -- Opportunities/Risks for Japanese companies
  region text[], 
  category text,
  image_url text
);

-- Loopback for existing table update if needed:
-- alter table articles add column japan_impact text;

alter table articles enable row level security;

create policy "Public read access"
  on articles for select
  using ( true );

create policy "Anon insert access"
  on articles for insert
  with check ( true );
