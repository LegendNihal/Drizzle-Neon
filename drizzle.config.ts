import type { Config } from "drizzle-kit";

// if (!('DATABASE_URL' in process.env))
//   throw new Error('DATABASE_URL not found on .env.development');

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  // driver: 'pg',
  // dbCredentials: {
  //   connectionString: process.env.DATABASE_URL!,
  // },
  // strict: true
} satisfies Config;