import { db } from "..";
import * as userSchema from "../schema/user";
import * as familySchema from "../schema/family"
import * as budgetSchema from "../schema/budget"


export async function mainSeed() {
    await db.insert(familySchema.family).values({
        id: "test",
        name: "DEV",
    });

    await db.insert(userSchema.user).values({
        id: "m747iuirivj3v34y4thrrjrm",
        username: "test",
        passwordHash: "$argon2id$v=19$m=19456,t=2,p=1$E+v+yWQjwFFf3nYoA4dYIQ$6X0+jvaQio6TcKLaeKfbNgcRldHRlqtL6zQKQ/8+SZA",
        familyId: "test",
    });

    await db.insert(userSchema.user).values({
        id: "m747iuirivj3v34y4thrrjrm",
        username: "test",
        passwordHash: "$argon2id$v=19$m=19456,t=2,p=1$E+v+yWQjwFFf3nYoA4dYIQ$6X0+jvaQio6TcKLaeKfbNgcRldHRlqtL6zQKQ/8+SZA",
        familyId: "test",
    });

    await db.insert(budgetSchema.budget).values({
        id: "budg1",
        name: "Réaménagement du salon",
        belongsTo: "test"
    });

    await db.insert(budgetSchema.budget).values({
        id: "budg2",
        name: "Réaménagement de la cuisine",
        belongsTo: "test"
    });

    await db.insert(budgetSchema.budgetLine).values({
        id: "bl1",
        name: "Tables et chaises",
        allocatedAmount: 100.0,
        createdAt: new Date(Date.now()),
        createdBy: "m747iuirivj3v34y4thrrjrm",
        budgetId: "budg1"
    });

    await db.insert(budgetSchema.budgetLine).values({
        id: "bl2",
        name: "Tapis et coussins",
        allocatedAmount: 76.0,
        usedAmount: 20.0,
        createdAt: new Date(Date.now()),
        createdBy: "m747iuirivj3v34y4thrrjrm",
        budgetId: "budg1"
    });

    await db.insert(budgetSchema.budgetLine).values({
        id: "bl3",
        name: "Couteaux de cuisine",
        allocatedAmount: 760.0,
        usedAmount: 200.0,
        createdAt: new Date(Date.now()),
        createdBy: "m747iuirivj3v34y4thrrjrm",
        budgetId: "budg2"
    });
}