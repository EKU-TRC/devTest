import { BudgetCode } from "./budget-code.model";

export class ResponseData {
  public results: string;
  public message: string;
  public data: BudgetCode[];

  constructor(results: string, message: string, data: BudgetCode[]) {
    this.results = results;
    this.message = message;
    this.data = data;
  }
}
