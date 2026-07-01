import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Parse .env manually
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.length > 0 && value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value.trim();
  }
});

const supabaseUrl = env['VITE_SUPABASE_URL'];
const supabaseAnonKey = env['VITE_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not found in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const credentials = [
  { email: 'androinframind@androinframind.com', password: 'Ankit@2026@' },
  { email: 'andro@androinframind.com', password: 'andro@2026!@#' },
  { email: 'androinframind@gmail.com', password: 'Andro!@#2026' }
];

const jobs = [
  {
    title: 'Senior Software Engineer (Full-Stack)',
    department: 'Engineering',
    location: 'Jaipur, Rajasthan (On-site / Hybrid)',
    type: 'Full-time',
    description: 'We are looking for a Full-Stack Engineer experienced in React, Node.js, and Supabase to design, build, and maintain scalable web architectures.'
  },
  {
    title: 'UI/UX Designer',
    department: 'Product Design',
    location: 'Remote (India)',
    type: 'Full-time',
    description: 'Create premium, intuitive visual systems, layouts, and interactive flows for SaaS platforms, mobile applications, and high-end agency websites.'
  },
  {
    title: 'Digital Marketing & SEO Expert',
    department: 'Growth & Strategy',
    location: 'Jaipur, Rajasthan (On-site)',
    type: 'Full-time',
    description: 'Lead content strategies, execute technical search engine optimization (SEO) audits, and manage conversions across digital platforms.'
  }
];

async function seed() {
  console.log('Connecting to:', supabaseUrl);
  let authenticated = false;
  for (const cred of credentials) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(cred);
      if (error) {
        console.log(`Failed login for ${cred.email}:`, error.message);
        continue;
      }
      console.log(`Successfully logged in as ${cred.email}`);
      authenticated = true;
      break;
    } catch (e) {
      console.log(`Error logging in for ${cred.email}:`, e.message);
    }
  }

  if (!authenticated) {
    console.log('Warning: Could not authenticate. Attempting to insert without authentication...');
  }

  try {
    // Delete existing jobs to prevent duplicates
    const { error: deleteError } = await supabase.from('jobs').delete().neq('title', '');
    if (deleteError) {
      console.warn('Cleanup warning:', deleteError.message);
    } else {
      console.log('Cleaned up old jobs.');
    }

    // Insert jobs
    const { data: inserted, error: insertError } = await supabase.from('jobs').insert(jobs).select();
    if (insertError) {
      throw insertError;
    }
    console.log('Successfully inserted seed jobs:', inserted);
  } catch (err) {
    console.error('Error operations on jobs table:', err.message);
  }
}

seed();
