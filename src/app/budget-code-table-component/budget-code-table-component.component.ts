import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BudgetCodeTableComponentDataSource } from './budget-code-table-component-datasource';
import { IBudgetCode } from '../budget-code/budget-code.model';
import { GetBudgetCodeService } from '../shared/budgetCodeGet.service';

@Component({
  selector: 'app-budget-code-table-component',
  templateUrl: './budget-code-table-component.component.html',
  styleUrls: ['./budget-code-table-component.component.css']
})
export class BudgetCodeTableComponentComponent
  implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IBudgetCode>;
  dataSource: BudgetCodeTableComponentDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'budgetTitle',
    'budgetCode',
    'fiscalYear',
    'budgetCodeId'
  ];

  constructor(private budgets: GetBudgetCodeService) {}

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.sort.sortChange.next();
  }

  ngOnInit() {
    this.dataSource = new BudgetCodeTableComponentDataSource(this.budgets);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
