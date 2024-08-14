import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddEditModal } from '../../../core/interfaces/modals/add-edit-modal.abstract';
import { SharedModule } from '../../../shared/shared.module';
import {
  AddUserAction,
  GetUserAction,
} from '../../../store/actions/user.actions';
import { UserState } from '../../../store/states/user.state';
import { UpdateUserAction } from './../../../store/actions/user.actions';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  standalone: true,
  imports: [SharedModule],
})
export class AddEditUserComponent extends AddEditModal implements OnDestroy {
    
  constructor(private _formBuilder: FormBuilder, private _store: Store) {
    super();
    this.form = this.initializeForm();
    this.checkForUpdate(_store, UserState.showModal);
  }

  ngOnDestroy(): void {
      this.destroySubscription.next(true);
      this.destroySubscription.complete();
  }

  override initializeForm(): FormGroup {
    return this._formBuilder.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  override save(): void {
    if (this.form.invalid) return;
    else if (this.form.controls['id']?.value) {
      this._store.dispatch(new UpdateUserAction(this.form.value));
    } else {
      this._store.dispatch(new AddUserAction(this.form.value));
    }
    this.reset();
  }

  override close(): void {
    this._store.dispatch(new GetUserAction(''));
    super.close();
  }
}
