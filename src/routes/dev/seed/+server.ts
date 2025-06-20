import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { mainSeed } from '$lib/server/db/seed'

export const prerender = false;

export const GET: RequestHandler = async (event) => {

    await mainSeed()
    return redirect(302, '/login');
};