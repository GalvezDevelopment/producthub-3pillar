import { inject } from '@angular/core';
import { LoginAction, LogoutAction, SetLoadingAction, SetTokenAction } from '../actions/core.actions';
import { CoreStateModel } from './../../core/interfaces/state/core-state.interface';
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@State<CoreStateModel>({
    name: 'core',
    defaults: {
        isLoading: false,
        token: ''
    }
})
export class CoreState {
    private _router = inject(Router);
    private _authService = inject(AuthService);
    private _store = inject(Store);

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
                this._router.navigate(['/']);
                ctx.patchState({ token: response.data, isLoading: false });
            }
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
            }
        })
    }
}