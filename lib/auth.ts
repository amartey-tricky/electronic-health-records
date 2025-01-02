import bcrypt from "bcryptjs";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { userData } from "./schema";

export async function createUser(data: userData) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    await db.insert(users).values({ username: data.username, password: hashedPassword, role: data.role });
    return { success: true };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

export async function loginUser(data: userData) {
  const user = await db.select().from(users).where(eq(users.username, data.username)).limit(1);

  if (user.length === 0) {
    return { success: false, error: new Error("User not found") };
  }

  const validPassword = await bcrypt.compare(data.password, user[0].password);

  if (!validPassword) {
    return { success: false, error: new Error("Invalid password") };
  }

  return { success: true, user: { id: user[0].id, username: user[0].username, role: user[0].role } };
}
