import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddEditModal } from '../../../core/interfaces/modals/add-edit-modal.abstract';
import { SharedModule } from '../../../shared/shared.module';
import {
  AddCategoryAction,
  GetCategoryAction,
  UpdateCategoryAction,
} from '../../../store/actions/category.actions';
import { CategoryState } from '../../../store/states/category.state';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: 'add-edit-category.component.html',
  standalone: true,
  imports: [SharedModule],
})
export class AddEditCategoryComponent extends AddEditModal {
  constructor(private _formBuilder: FormBuilder, private _store: Store) {
    super();
    this.form = this.initializeForm();
    this.checkForUpdate(_store, CategoryState.showModal);
  }

  override initializeForm(): FormGroup {
    return this._formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  override save(): void {
    if (this.form.invalid) return;
    this.form.controls['id'].value
      ? this._store.dispatch(new UpdateCategoryAction(this.form.value))
      : this._store.dispatch(new AddCategoryAction(this.form.value));
    this.reset();
  }
  override close(): void {
    this._store.dispatch(new GetCategoryAction(''));
    super.close();
  }
}
