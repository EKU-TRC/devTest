// import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { IBudgetCode } from './../budget-code/budget-code.model';
import { GetBudgetCodeService } from '../shared/budgetCodeGet.service';

// TODO: Replace this with your own data model type
/**
 * Data source for the BudgetCodeTableComponent view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BudgetCodeTableComponentDataSource extends MatTableDataSource<
  IBudgetCode
> {
  constructor(private budgetService: GetBudgetCodeService) {
    super();
    this.budgetService = budgetService;
  }

  data: IBudgetCode[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  getBudgetCodes(): void {
    this.budgetService.getBudgetCodes().subscribe(budgetCodesResp => {
       //  @ts-ignore
      this.data = budgetCodesResp.data;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
   //  @ts-ignore
  connect(): Observable<IBudgetCode[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // this.data = this.filteredData;
    this.getBudgetCodes();
    const dataMutations = [
      observableOf(this.filteredData),
      this.budgetService.getBudgetCodes(),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.filteredData]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IBudgetCode[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  // private getFilteredData(data: IBudgetCode[]){
  //   return this.filteredData;
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IBudgetCode[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return  (data !== []) ? data : data = 
      [{budgetTitle: 'Sorry, no results returned.', budgetCode: '', budgetCodeId: 0, fiscalYear: 404}];
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'budgetTitle':
          return compare(a.budgetTitle, b.budgetTitle, isAsc);
        case 'budgetCodeId':
          return compare(+a.budgetCodeId, +b.budgetCodeId, isAsc);
        case 'budgetCode':
          return compare(a.budgetCode, b.budgetCode, isAsc);
        case 'fiscalYear':
          return compare(+a.fiscalYear, +b.fiscalYear, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
