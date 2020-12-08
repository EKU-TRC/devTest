export class BudgetCode {
  // budgetCodeId: number;
  fiscalYear: number;
  budgetCode: string;
  budgetTitle: string;

  constructor(fiscalYear: number, budgetCode: string, budgetTitle: string) {
    this.fiscalYear = fiscalYear;
    this.budgetCode = budgetCode;
    this.budgetTitle = budgetTitle;
  }
}
