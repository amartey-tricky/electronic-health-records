import { drizzle } from "drizzle-orm/postgres-js/driver";
import postgres from "postgres";

const db_url = process.env.DATABASE_URL as string;

const client = postgres(db_url, { prepare: false });
export const db = drizzle(client);
