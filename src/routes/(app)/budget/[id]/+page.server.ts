import * as budgetRepository from '$lib/server/db/repositories/budget';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {
	return {
		budget: await budgetRepository.getBudgetById(params.id),
		budgetLines: await budgetRepository.getBudgetLinesByBudgetId(params.id)
	};
};