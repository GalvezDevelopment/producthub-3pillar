import { Component, inject, input, output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-base-catalog',
  templateUrl: './base-catalog.component.html',
  styleUrl: './base-catalog.component.css',
  providers: [ConfirmationService],
})
export class BaseCatalogComponent {
  private _confirmationService = inject(ConfirmationService);
  catalogName = input('', { alias: 'title' });
  allowEditDelete = input(false);
  onAdd = output<void>();
  onDelete = output<void>();
  onUpdate = output<void>();

  confirmDelete(event: Event): void {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estás seguro que deseas continuar?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onDelete.emit();
      },
      reject: () => {},
    });
  }
}
