import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/server/db';
import { budget, budgetLine } from '$lib/server/db/schema';
import { sum, eq } from 'drizzle-orm';
import * as BudgetRepository from '$lib/server/db/repositories/budget';
import type { BudgetTable } from './columns';
import logger from '$lib/logger';

async function createBudgetTable(): Promise<BudgetTable[]> {
    // Get all budgets with their related budget lines
    const budgetsWithLines = await db
        .select({
            budgetId: budget.id,
            budgetName: budget.name,
            allocatedAmount: budgetLine.allocatedAmount,
            usedAmount: budgetLine.usedAmount,
            closed: budgetLine.closed
        })
        .from(budget)
        .leftJoin(budgetLine, eq(budget.id, budgetLine.budgetId));

    // Group by budget and calculate totals
    const budgetMap = new Map<string, {
        id: string;
        name: string;
        totalAllocated: number;
        totalUsed: number;
        hasClosedLines: boolean;
    }>();

    for (const row of budgetsWithLines) {
        const budgetId = row.budgetId;

        if (!budgetMap.has(budgetId)) {
            budgetMap.set(budgetId, {
                id: budgetId,
                name: row.budgetName,
                totalAllocated: 0,
                totalUsed: 0,
                hasClosedLines: false
            });
        }

        const budgetData = budgetMap.get(budgetId)!;

        // Add amounts if budget line exists (leftJoin might return null values)
        if (row.allocatedAmount !== null) {
            budgetData.totalAllocated += row.allocatedAmount;
            budgetData.totalUsed += row.usedAmount || 0;

            if (row.closed) {
                budgetData.hasClosedLines = true;
            }
        }
    }

    // Convert to BudgetTable format
    return Array.from(budgetMap.values()).map(budgetData => {
        const remainingAmount = budgetData.totalAllocated - budgetData.totalUsed;

        let status: BudgetTable['status'];
        if (budgetData.hasClosedLines) {
            status = 'closed';
        } else if (remainingAmount < 0) {
            status = 'over-consumed';
        } else if (remainingAmount === 0) {
            status = 'consumed';
        } else {
            status = 'available';
        }

        return {
            id: budgetData.id,
            name: budgetData.name,
            totalAmount: budgetData.totalAllocated,
            status
        };
    });
}

export const load: PageServerLoad = async (event) => {
    if (!event.locals.user) {
        return redirect(302, '/login');
    }

    const budgets = await db.select().from(budget)

    return {
        user: event.locals.user,
        budgets: budgets,
        budgetTable: await createBudgetTable(),
        budgetLines: await db.select().from(budgetLine)
    };
};

export const actions = {
    deleteBudget: async ({locals, url}) => {
        if (!locals.user) {
            error(401);
        }

        const id = url.searchParams.get('id') as string;
        await BudgetRepository.deleteBudgetById(id);
        logger.info('Deleted budget id: ', id)

        redirect(303, '/budget');
    }
} satisfies Actions;