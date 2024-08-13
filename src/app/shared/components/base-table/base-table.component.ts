import { Component, EventEmitter, Input, input, Output, output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrl: './base-table.component.css'
})
export class BaseTableComponent {
  columns = input.required<TemplateRef<any>>();
  rows = input.required<TemplateRef<any>>();
  values = input.required<any[]>();
  isLoading = input.required<boolean>();
  @Input() selectedItem: any;
  @Output() selectedItemChange = new EventEmitter<any>();

  rowSelected(item: any): void {
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
  }
}
