import * as auth from '$lib/server/auth';
import { error, fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = async (event) => {

    if (!event.locals.session) {
        return error(401, 'Unauthorized');
    }
    await auth.invalidateSession(event.locals.session.id);
    auth.deleteSessionTokenCookie(event);
    return redirect(302, '/login');
};