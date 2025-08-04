// utils/db.js

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Required for serverless environments like Next.js
neonConfig.fetch = fetch;

// Basic runtime safety check
if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error("Missing NEXT_PUBLIC_DRIZZLE_DB_URL in environment variables.");
}

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema });
