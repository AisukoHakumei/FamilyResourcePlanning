import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { budget } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
    if (!event.locals.user) {
        return redirect(302, '/login');
    }

    const budgets = db.select().from(budget)
    return { 
        user: event.locals.user,
        budgets: budgets
    };
};