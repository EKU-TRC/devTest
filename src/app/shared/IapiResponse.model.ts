import { IBudgetCode } from '../budget-code/budget-code.model';

export interface IapiResponse {
    results: string;
    message: string;
    data: IBudgetCode[];
  }
