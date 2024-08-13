import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { Table, TableModule, TableService } from 'primeng/table';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { BaseCatalogComponent } from './components/catalog/base-catalog/base-catalog.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';

const components = [
  BaseTableComponent,
  BaseModalComponent,
  BaseCatalogComponent,
  CustomLoaderComponent
];

const modules = [    
  CommonModule, 
  ButtonModule,
  TableModule, 
  InputTextModule,
  InputNumberModule,
  InputTextareaModule,
  FormsModule,
  ReactiveFormsModule,
  ConfirmDialogModule,
  ProgressSpinnerModule,
  DropdownModule
];

@NgModule({
  declarations: [...components],
  providers: [Table, TableService],
  imports: [
    DialogModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...components],
})
export class SharedModule {}
