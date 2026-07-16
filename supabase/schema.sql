-- Create contacts table for project inquiries
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    work_email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    service TEXT NOT NULL,
    budget TEXT NOT NULL,
    project_details TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public submission of the contact form)
CREATE POLICY "Allow anonymous insert access" 
ON public.contacts 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated users (admin) to read submissions
CREATE POLICY "Allow authenticated read access" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    tagline TEXT NOT NULL,
    desc_text TEXT NOT NULL,
    badge TEXT NOT NULL,
    image_url TEXT,
    features TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure existing projects tables also get the image URL column
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Enable RLS for projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Allow public read access to projects"
ON public.projects FOR SELECT USING (true);

-- Allow authenticated users (admin) to manage projects
CREATE POLICY "Allow admin to manage projects"
ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    tag TEXT NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    author TEXT NOT NULL,
    date_text TEXT NOT NULL,
    read_time TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to blogs
CREATE POLICY "Allow public read access to blogs"
ON public.blogs FOR SELECT USING (true);

-- Allow authenticated users (admin) to manage blogs
CREATE POLICY "Allow admin to manage blogs"
ON public.blogs FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create jobs table
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for jobs
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to jobs
DROP POLICY IF EXISTS "Allow public read access to jobs" ON public.jobs;
CREATE POLICY "Allow public read access to jobs"
ON public.jobs FOR SELECT USING (true);

-- Allow authenticated users (admin) to manage jobs
DROP POLICY IF EXISTS "Allow admin to manage jobs" ON public.jobs;
CREATE POLICY "Allow admin to manage jobs"
ON public.jobs FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Insert initial seed job postings if they do not exist
INSERT INTO public.jobs (title, department, location, type, description)
SELECT 'Senior Software Engineer (Full-Stack)', 'Engineering', 'Jaipur, Rajasthan (On-site / Hybrid)', 'Full-time', 'We are looking for a Full-Stack Engineer experienced in React, Node.js, and Supabase to design, build, and maintain scalable web architectures.'
WHERE NOT EXISTS (SELECT 1 FROM public.jobs WHERE title = 'Senior Software Engineer (Full-Stack)');

INSERT INTO public.jobs (title, department, location, type, description)
SELECT 'UI/UX Designer', 'Product Design', 'Remote (India)', 'Full-time', 'Create premium, intuitive visual systems, layouts, and interactive flows for SaaS platforms, mobile applications, and high-end agency websites.'
WHERE NOT EXISTS (SELECT 1 FROM public.jobs WHERE title = 'UI/UX Designer');

INSERT INTO public.jobs (title, department, location, type, description)
SELECT 'Digital Marketing & SEO Expert', 'Growth & Strategy', 'Jaipur, Rajasthan (On-site)', 'Full-time', 'Lead content strategies, execute technical search engine optimization (SEO) audits, and manage conversions across digital platforms.'
WHERE NOT EXISTS (SELECT 1 FROM public.jobs WHERE title = 'Digital Marketing & SEO Expert');

-- Create job applications table
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
    job_title TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    portfolio_link TEXT,
    cover_letter TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for job applications
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can apply for a job)
DROP POLICY IF EXISTS "Allow anonymous insert access to job_applications" ON public.job_applications;
CREATE POLICY "Allow anonymous insert access to job_applications"
ON public.job_applications FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated users (admin) to read/manage applications
DROP POLICY IF EXISTS "Allow admin to manage job_applications" ON public.job_applications;
CREATE POLICY "Allow admin to manage job_applications"
ON public.job_applications FOR ALL TO authenticated USING (true) WITH CHECK (true);