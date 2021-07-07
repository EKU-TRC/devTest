/**
 * Budget Code Model
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 2
 */
export class BudgetCode {

    // declare class members in the constructor
    constructor(
        public budgetCodeId: number,
        public fiscalYear: number,
        public budgetCode: string,
        public budgetTitle: string
    ){}

    // Return key value pairs that match the casing from api post request documentation
    toPayloadFormat(): {} {
        return{
            "BudgetCodeId": this.budgetCodeId,
            "FiscalYear": this.fiscalYear,
            "BudgetCode": this.budgetCode,
            "BudgetTitle": this.budgetTitle
        };
    }
}