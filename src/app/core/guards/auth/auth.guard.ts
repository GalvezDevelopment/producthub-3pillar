import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { CoreState } from '../../../store/states/core.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const isLoggedIn = this._store.selectSnapshot(CoreState.getToken);
    if (isLoggedIn) return !!isLoggedIn;
    this._router.navigate(['/login']);
    return false;
  }
}
