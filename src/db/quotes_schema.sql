-- Create a table for quotes
create table quotes (
  id uuid default gen_random_uuid() primary key,
  text text not null,
  author text not null,
  category text not null,
  source_url text, -- Optional: Link to Ted Talk or Research Paper
  verified boolean default false, -- For "Scientific Proven" fact checking
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index category for faster filtering
create index quotes_category_idx on quotes (category);

-- RLS Policies (Optional but recommended)
alter table quotes enable row level security;

-- Everyone can read quotes
create policy "Public quotes are viewable by everyone."
  on quotes for select
  using ( true );

-- Only authenticated users (admins) can insert/update (Assuming you have an admin role logic, for now simple auth check)
-- create policy "Users can insert their own quotes."
--   on quotes for insert
--   with check ( auth.uid() = user_id );
