import {db} from "$lib/server/db";
import * as budgetSchema from "$lib/server/db/schema/budget";
import type {BudgetLineType} from "$lib/types";
import {eq} from "drizzle-orm";


//BUDGET
export const getBudgetById = async (budgetId: string) => {
    return db
        .query.budget.findFirst({
        where: eq(budgetSchema.budget.id, budgetId)
    });
}
export const deleteBudgetById = async (budgetId: string) => {
    await db
        .delete(budgetSchema.budgetLine)
        .where(eq(budgetSchema.budgetLine.budgetId, budgetId));

    return db
        .delete(budgetSchema.budget)
        .where(eq(budgetSchema.budget.id, budgetId));
}

// BUDGET LINES
export const getBudgetLinesByBudgetId = async (budgetId: string) => {
    return db
        .select()
        .from(budgetSchema.budgetLine)
        .where(eq(budgetSchema.budgetLine.budgetId, budgetId));
}

export const createBudgetLine = async ({ id, name, allocatedAmount, createdAt, createdBy, budgetId }: BudgetLineType) => {
    return db
        .insert(budgetSchema.budgetLine)
        .values({
            id,
            name,
            allocatedAmount,
            createdAt,
            createdBy,
            budgetId,
        });
}