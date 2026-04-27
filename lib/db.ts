import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('Missing environment variable: DATABASE_URL');
}

const sql = neon(process.env.DATABASE_URL)

export default sql
