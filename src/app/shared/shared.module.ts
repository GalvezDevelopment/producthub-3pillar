import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Table, TableModule, TableService } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { BaseCatalogComponent } from './components/catalog/base-catalog/base-catalog.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';

export function provideShared(): Provider[] {
  return [MessageService];
}

const components = [
  BaseTableComponent,
  BaseModalComponent,
  BaseCatalogComponent,
  CustomLoaderComponent,
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
  DropdownModule,
  ImageModule,
  ToastModule,
];

@NgModule({
  declarations: [...components],
  providers: [Table, TableService],
  imports: [DialogModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
