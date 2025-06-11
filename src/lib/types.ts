export type UserRegisterType = {
  id: string;
  username: string;
  passwordHash: string;
  familyId: string;
}

export type BudgetLineType = {
  id: string;
  name: string;
  allocatedAmount: number;
  usedAmount?: number;
  closed?: boolean;
  createdAt: Date;
  createdBy: string;
  budgetId: string;
}