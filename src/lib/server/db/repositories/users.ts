import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema/user';
import type { UserType } from '$lib/types';


export const registerUser = async ({id, username, passwordHash, familyId = "test"}: UserType) => {
  return db
    .insert(table.user)
    .values({ id: id, username, passwordHash, familyId: familyId })
}

export const getUserByUsername = async (username: string) => {
  return db
    .select()
    .from(table.user)
    .where(eq(table.user.username, username));
}