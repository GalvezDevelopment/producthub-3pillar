import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrl: './base-catalog.component.css'
})
export class BaseCatalogComponent {
  catalogName = input('', {alias: 'title'});
  allowEditDelete = input(false);
  onAdd = output<void>();
  onDelete = output<void>();
  onUpdate = output<void>();
}
