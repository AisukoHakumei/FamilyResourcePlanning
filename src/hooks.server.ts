import type { Handle, ServerInit } from '@sveltejs/kit';
import * as auth from '$lib/server/auth.js';
import { execSync } from "node:child_process"
import { existsSync } from 'node:fs';
import { mainSeed } from '$lib/server/db/seed';
import { DATABASE_URL } from '$env/static/private';

export const init: ServerInit = async () => {

	if (existsSync("local.db")) {
		console.log("Database already exists, not doing anything...")
	} else {
		console.log("Creating database and seeding it...")
		execSync("touch " + DATABASE_URL + " && pnpm run db:push --force")
		await mainSeed()
	}

	console.log("Server ready...")
}

const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);
	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);
	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};

export const handle: Handle = handleAuth;
