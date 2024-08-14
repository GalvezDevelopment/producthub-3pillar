import { inject, Injectable } from '@angular/core';
import {
  LoginAction,
  LogoutAction,
  SetLoadingAction,
  SetTokenAction,
} from '../actions/core.actions';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpStatusCode } from '@angular/common/http';
import { CoreStateModel } from '@producthub/domain';

@State<CoreStateModel>({
  name: 'core',
  defaults: {
    isLoading: false,
    token: '',
  },
})
@Injectable()
export class CoreState {
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _store = inject(Store);
  private _messageService = inject(MessageService);

  @Selector()
  static getIsLoading(state: CoreStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getToken(state: CoreStateModel): string | null {
    return state.token;
  }

  @Action(SetTokenAction)
  setToken(ctx: StateContext<CoreStateModel>, action: SetTokenAction) {
    ctx.patchState({ token: action.token });
  }

  @Action(SetLoadingAction)
  setLoading(ctx: StateContext<CoreStateModel>, action: SetLoadingAction) {
    ctx.patchState({ isLoading: action.show });
  }

  @Action(LoginAction)
  login(ctx: StateContext<CoreStateModel>, action: LoginAction) {
    ctx.patchState({ isLoading: true });
    this._authService.login(action.email, action.password).subscribe({
      next: (response) => {
        if (response.status === HttpStatusCode.Unauthorized) {
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Usuario o contraseña incorrectos'
          });
        } else {
          this._router.navigate(['/']);
        }
        ctx.patchState({ token: response.data });
        ctx.dispatch(new SetLoadingAction(false));
      },
    });
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<CoreStateModel>, action: LogoutAction) {
    ctx.patchState({ isLoading: true });
    this._authService.logout().subscribe({
      next: () => {
        ctx.patchState({ isLoading: false });
        this._store.dispatch(new SetTokenAction(''));
        this._router.navigate(['/login']);
      },
    });
  }
}
