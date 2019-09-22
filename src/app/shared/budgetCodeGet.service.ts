import { Injectable } from '@angular/core';
import { IBudgetCode } from '../budget-code/budget-code.model';
import { Observable, of } from 'rxjs';

const budgetCodes: IBudgetCode[] = [
  {
    budgetCodeId: 1,
    fiscalYear: 2018,
    budgetCode: '8-00001',
    budgetTitle: 'ABC Training'
  },
  {
    budgetCodeId: 2,
    fiscalYear: 2018,
    budgetCode: '8-00002',
    budgetTitle: 'TRC Training'
  },
  {
    budgetCodeId: 3,
    fiscalYear: 2018,
    budgetCode: '8-00003',
    budgetTitle: 'XYZ Training'
  },
  {
    budgetCodeId: 4,
    fiscalYear: 2018,
    budgetCode: '8-00006',
    budgetTitle: 'ABC Project'
  },
  {
    budgetCodeId: 5,
    fiscalYear: 2018,
    budgetCode: '8-00007',
    budgetTitle: 'TRC Project'
  },
  {
    budgetCodeId: 6,
    fiscalYear: 2018,
    budgetCode: '8-00008',
    budgetTitle: 'XYZ Project'
  },
  {
    budgetCodeId: 7,
    fiscalYear: 2018,
    budgetCode: '8-00010',
    budgetTitle: 'Research & Services'
  },
  {
    budgetCodeId: 8,
    fiscalYear: 2018,
    budgetCode: '7-12345',
    budgetTitle: 'Misc. Expenses'
  },
  {
    budgetCodeId: 9,
    fiscalYear: 2019,
    budgetCode: '8-00011',
    budgetTitle: 'ABC Training'
  },
  {
    budgetCodeId: 10,
    fiscalYear: 2019,
    budgetCode: '8-00012',
    budgetTitle: 'TRC Training'
  },
  {
    budgetCodeId: 11,
    fiscalYear: 2019,
    budgetCode: '8-00013',
    budgetTitle: 'XYZ Training'
  },
  {
    budgetCodeId: 12,
    fiscalYear: 2019,
    budgetCode: '8-00014',
    budgetTitle: 'Hardware Upgrades'
  },
  {
    budgetCodeId: 13,
    fiscalYear: 2019,
    budgetCode: '8-00015',
    budgetTitle: 'Software Liscensing'
  },
  {
    budgetCodeId: 14,
    fiscalYear: 2019,
    budgetCode: '8-00016',
    budgetTitle: 'ABC Project'
  },
  {
    budgetCodeId: 15,
    fiscalYear: 2019,
    budgetCode: '8-00017',
    budgetTitle: 'TRC Project'
  },
  {
    budgetCodeId: 16,
    fiscalYear: 2019,
    budgetCode: '8-00018',
    budgetTitle: 'XYZ Project'
  },
  {
    budgetCodeId: 17,
    fiscalYear: 2019,
    budgetCode: '8-00019',
    budgetTitle: 'Other Funds'
  },
  {
    budgetCodeId: 18,
    fiscalYear: 2019,
    budgetCode: '8-00020',
    budgetTitle: 'Research & Services'
  },
  {
    budgetCodeId: 19,
    fiscalYear: 2020,
    budgetCode: '8-00021',
    budgetTitle: 'EKU Training'
  },
  {
    budgetCodeId: 20,
    fiscalYear: 2020,
    budgetCode: '8-00022',
    budgetTitle: 'TRC Training'
  },
  {
    budgetCodeId: 21,
    fiscalYear: 2020,
    budgetCode: '8-00023',
    budgetTitle: 'XYZ Training'
  },
  {
    budgetCodeId: 22,
    fiscalYear: 2020,
    budgetCode: '8-00024',
    budgetTitle: 'Hardware Upgrades'
  },
  {
    budgetCodeId: 23,
    fiscalYear: 2020,
    budgetCode: '8-00025',
    budgetTitle: 'Software Liscensing'
  },
  {
    budgetCodeId: 24,
    fiscalYear: 2020,
    budgetCode: '8-00026',
    budgetTitle: 'EKU Project'
  },
  {
    budgetCodeId: 25,
    fiscalYear: 2020,
    budgetCode: '8-00027',
    budgetTitle: 'TRC Project'
  },
  {
    budgetCodeId: 26,
    fiscalYear: 2020,
    budgetCode: '8-00028',
    budgetTitle: 'XYZ Project'
  },
  {
    budgetCodeId: 27,
    fiscalYear: 2020,
    budgetCode: '8-00029',
    budgetTitle: 'Other Funds'
  },
  {
    budgetCodeId: 28,
    fiscalYear: 2020,
    budgetCode: '8-00030',
    budgetTitle: 'Research & Services'
  },
  {
    budgetCodeId: 29,
    fiscalYear: 2021,
    budgetCode: '8-00031',
    budgetTitle: 'EKU Training'
  },
  {
    budgetCodeId: 30,
    fiscalYear: 2021,
    budgetCode: '8-00032',
    budgetTitle: 'TRC Training'
  },
  {
    budgetCodeId: 31,
    fiscalYear: 2021,
    budgetCode: '8-00033',
    budgetTitle: 'XYZ Training'
  },
  {
    budgetCodeId: 32,
    fiscalYear: 2021,
    budgetCode: '8-00034',
    budgetTitle: 'Hardware Upgrades'
  },
  {
    budgetCodeId: 33,
    fiscalYear: 2021,
    budgetCode: '8-00035',
    budgetTitle: 'Software Liscensing'
  },
  {
    budgetCodeId: 34,
    fiscalYear: 2021,
    budgetCode: '8-00036',
    budgetTitle: 'EKU Project'
  },
  {
    budgetCodeId: 35,
    fiscalYear: 2021,
    budgetCode: '8-00037',
    budgetTitle: 'TRC Project'
  },
  {
    budgetCodeId: 36,
    fiscalYear: 2021,
    budgetCode: '8-00038',
    budgetTitle: 'XYZ Project'
  },
  {
    budgetCodeId: 37,
    fiscalYear: 2021,
    budgetCode: '8-00039',
    budgetTitle: 'Other Funds'
  },
  {
    budgetCodeId: 38,
    fiscalYear: 2021,
    budgetCode: '8-00040',
    budgetTitle: 'Research & Services'
  }
];

@Injectable()
export class GetBudgetCodeService {
  constructor() {
    /*http*/
  }

 getBudgetCodes(): Observable<IBudgetCode[]> {
    return of(budgetCodes);
  }

   getBudgetCode(budgetId: number): Observable<IBudgetCode> {
    return of(budgetCodes[budgetId]);
  }
}
