import { db } from '$lib/server/db';
import { budget, budgetLine } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {
	return {
		budget: await db.query.budget.findFirst({
			where: eq(budget.id, params.id)
		}),
		budgetLines: await db.select().from(budgetLine).where(eq(budgetLine.budgetId, params.id))
	};
};