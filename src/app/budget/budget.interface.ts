export interface Budget {
  budgetCodeId: number;
  fiscalYear: number;
  budgetCode: string;
  budgetTitle: string;
}

export interface BudgetResponse {
  results: string;
  message: string;
  data: Budget[];
}
