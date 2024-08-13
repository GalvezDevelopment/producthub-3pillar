import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { LoginAction } from '../store/actions/core.actions';
import { CoreState } from '../store/states/core.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading$: Observable<boolean>;

  credentials = {
    email: '',
    password: ''
  };

  constructor(private _store: Store) {
    this.isLoading$ = _store.select(CoreState.getIsLoading);
  }

  login(): void {
    const {email, password} = this.credentials;
    if (email && password) {
      this._store.dispatch(new LoginAction(email, password));
    }
  }
}
