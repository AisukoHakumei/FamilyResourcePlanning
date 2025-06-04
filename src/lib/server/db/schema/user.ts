import { relations } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { family } from './family';

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    age: integer('age'),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    familyId: text('family_id').notNull()
});

export const userRelations = relations(user, ({ one }) => ({
    family: one(family, {
        fields: [user.familyId],
        references: [family.id]
    })
}))

export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;