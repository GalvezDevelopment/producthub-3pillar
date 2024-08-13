import { Component, inject, Input, input, output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.css',
  providers: [ConfirmationService],
})
export class BaseModalComponent {
  private _confirmationService = inject(ConfirmationService);
  @Input() title = '';
  @Input() show = false;
  @Input() disableAccept = false;
  @Input() size = {};
  actions = input<[string, string]>(['Cancelar', 'Aceptar']);

  onCancel = output<void>();
  onAccept = output<void>();

  accept(event: Event): void {
    this.show = false;
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estás seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onAccept.emit();
      },
      reject: () => {
        this.show = true;
      }
    });
  }

  close(): void {
    this.show = false;
    this.onCancel.emit();
  }
}
