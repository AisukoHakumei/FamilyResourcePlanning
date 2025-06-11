import * as BudgetRepository from '$lib/server/db/repositories/budget';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {
	return {
		budget: await BudgetRepository.getBudgetById(params.id),
		budgetLines: await BudgetRepository.getBudgetLinesByBudgetId(params.id)
	};
};