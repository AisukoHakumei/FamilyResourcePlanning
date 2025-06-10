import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core"
import { user } from "./user";
import { relations } from "drizzle-orm";
import { family } from "./family";

export const budget = sqliteTable('budget', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    belongsTo: text('belongs_to').notNull().references(() => family.id)

})

export const budgetRelations = relations(budget, ({ many }) => ({
    budgetLines: many(budgetLine)
}));

export const budgetLine = sqliteTable('budget_line', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    allocatedAmount: real('allocatedAmount').notNull().default(0.0),
    usedAmount: real('used_amount').notNull().default(0.0),
    closed: integer({ mode: 'boolean' }),

    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
    createdBy: text('created_by').notNull().references(() => user.id),
    budgetId: text('budget_id').notNull().references(() => budget.id)
});

export type Budget = typeof budget.$inferSelect
export type BudgetLine = typeof budgetLine.$inferSelect