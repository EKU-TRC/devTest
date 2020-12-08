/**
 * Budget Code Model
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 1
 */
export class BudgetCode {

    // declare class members in the constructor
    constructor(
        public budgetCodeId: number,
        public fiscalYear: number,
        public budgetCode: string,
        public budgetTitle: string
    ){}
}