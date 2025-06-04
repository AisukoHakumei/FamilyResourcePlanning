import { relations } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { user } from './user';

export const family = sqliteTable('family', {
    id: text('id').primaryKey(),
    name: text('name').notNull()
});

export const familyRelation = relations(family, ({many}) => ({
    family: many(user)
}))