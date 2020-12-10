/**
 * Local Shared Materials Module
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision: 1
 * 
 * Only purpose it to localize material imports and keep app.module manageable
 * 
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { 
  MatSortModule, 
  MatInputModule, 
  MatDialogModule, 
  MatTabsModule, 
  MatExpansionModule, 
  MatDividerModule, 
  MatStepperModule, 
  MatRadioModule, 
  MatTreeModule, 
  MatBottomSheetModule, 
  MatProgressBarModule, 
  MatSelectModule, 
  MatTableModule } from '@angular/material';

// saved to array to import/export quicker
const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  MatStepperModule,
  MatRadioModule,
  MatTreeModule,
  MatBottomSheetModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ], 
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
