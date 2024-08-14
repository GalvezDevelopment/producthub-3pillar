import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { LoginAction } from '../store/actions/core.actions';
import { CoreState } from '../store/states/core.state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoading$: Observable<boolean>;

  constructor(private _store: Store, private e: MessageService) {
    this.isLoading$ = _store.select(CoreState.getIsLoading);
  }

  login(form: NgForm): void {
    const {email, password} = form.value;
    if (email && password) {
      this._store.dispatch(new LoginAction(email, password));
    }
  }
}
