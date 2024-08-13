import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddEditModal } from '../../../core/interfaces/modals/add-edit-modal.abstract';
import { SharedModule } from '../../../shared/shared.module';
import {
  AddProductAction,
  GetProductAction,
  UpdateProductAction,
} from '../../../store/actions/product.actions';
import { ProductState } from '../../../store/states/product.state';
import { map, Observable } from 'rxjs';
import { Category } from '../../../core/interfaces/categories/category.interface';
import { CategoryState } from '../../../store/states/category.state';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: 'add-edit-product.component.html',
  styles: `
    ::ng-deep .p-dropdown { width: 100%; } 
    p-inputnumber, ::ng-deep .p-inputnumber { width: 100%; } 
  `,
  standalone: true,
  imports: [SharedModule],
})
export class AddEditProductComponent extends AddEditModal {
  categories$: Observable<Category[]>;

  constructor(private _formBuilder: FormBuilder, private _store: Store) {
    super();
    this.categories$ = _store
      .select(CategoryState.categories)
      .pipe(map((c) => c.categories));
    this.form = this.initializeForm();
    this.checkForUpdate(_store, ProductState.showModal);
  }

  save(): void {
    if (this.form.invalid) return;
    this.form.controls['id'].value
      ? this._store.dispatch(new UpdateProductAction(this.form.value))
      : this._store.dispatch(new AddProductAction(this.form.value));
    this.reset();
  }

  initializeForm(): FormGroup {
    return this._formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      category: this._formBuilder.group({
        id: ['', Validators.required],
      }),
    });
  }

  override close(): void {
    this._store.dispatch(new GetProductAction(''));
    super.close();
  }
}
