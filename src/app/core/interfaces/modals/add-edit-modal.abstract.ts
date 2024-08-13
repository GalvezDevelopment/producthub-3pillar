import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { filter, Subject, takeUntil, tap } from 'rxjs';

export abstract class AddEditModal {
  title = 'Agregar';
  form!: FormGroup;
  show = false;

  protected destroySubscription = new Subject();

  checkForUpdate(store: Store, action: any): void {
    store
      .select(action)
      .pipe(
        tap(console.log),
        takeUntil(this.destroySubscription),
        filter((item) => !!item)
      )
      .subscribe({
        next: (item: any) => {
          console.log(item);
          this.title = 'Modificar';
          this.form.patchValue(item);
          this.show = !!item;
          console.log(this.show);
        },
      });
  }

  close(): void {
    this.reset();
  }

  reset(): void {
    this.title = 'Agregar';
    this.show = false;
    this.form.reset();
  }

  abstract initializeForm(): FormGroup;
  abstract save(): void;
}
