export interface Budget {
     results: string;
     message: string;
     data: [{
          budgetCodeId: number;
          fiscalYear: number;
          budgetCode: string;
          budgetTitle: string;
     }];
}
