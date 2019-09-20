import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BudgetCodeTableComponentDataSource } from './budget-code-table-component-datasource';
import { IBudgetCode } from '../budget-code/budget-code.model';

@Component({
  selector: 'app-budget-code-table-component',
  templateUrl: './budget-code-table-component.component.html',
  styleUrls: ['./budget-code-table-component.component.css']
})
export class BudgetCodeTableComponentComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<IBudgetCode>;
  dataSource: BudgetCodeTableComponentDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['budgetTitle', 'budgetCode', 'fiscalYear', 'budgetCodeId'  ];


  ngOnInit() {
    this.dataSource = new BudgetCodeTableComponentDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
