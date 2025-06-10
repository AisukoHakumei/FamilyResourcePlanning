import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from "./schema/";
import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = new Database(env.DATABASE_URL);

export const db: BetterSQLite3Database<typeof schema> = drizzle(client, { schema });
