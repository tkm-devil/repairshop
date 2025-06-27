import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

// Load environment variables from .env.local file
config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

// Logger
// const db = drizzle(sql, {
//   logger: { level: 'info' }
// });

const db = drizzle(sql);

export { db };

