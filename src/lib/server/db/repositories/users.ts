import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema/user';
import type { UserRegisterType } from '$lib/types';


export const registerUser = async ({id, username, passwordHash, familyId = "test"}: UserRegisterType) => {
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