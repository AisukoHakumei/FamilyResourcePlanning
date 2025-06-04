import { reset, seed } from "drizzle-seed";
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { db } from "..";
import * as userSchema from "../schema/user";
import * as familySchema from "../schema/family"
import * as budgetSchema from "../schema/budget"



export async function resetDatabase() {
    try {
    await reset(db, userSchema)
    await reset(db, familySchema)
    await reset(db, budgetSchema)
    } catch {
        console.log("Failed to reset database. Maybe it was empty...")
    }
}

export async function createDevFamily() {
    try {
        db.insert(familySchema.family).values({
            id: "test",
            name: "DEV",
        })
    } catch {
        console.log("Failed to create dev family...")
    }
}