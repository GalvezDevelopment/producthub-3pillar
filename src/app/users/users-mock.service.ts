import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { delay, Observable, of } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';
import { BaseServiceMock } from '../core/mock/base-service-mock.service';
import { UserState } from '../store/states/user.state';
import { genId } from '../utils/http-request.utils';
import { buildResponse } from '../utils/http-responses.utils';
import { AddUser, User } from '@producthub/domain';

@Injectable({
  providedIn: 'root'
})
export class UsersMockService extends BaseServiceMock<User> {
  constructor(_store: Store) {
    super(_store);
    this.rehydrate(UserState.list, 'users');
  }

  add<K extends User>(user: AddUser): Observable<BaseResponse<null>> {
    const id = genId();
    const newUser = { ...user, id, registeredOn: Date() };
    this._list.set(id, newUser);
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
  getById<K extends User>(id: string): Observable<BaseResponse<K | null>> {
    const user = this._list.get(id) || null;
    return of(buildResponse(HttpStatusCode.Ok, user as K));
  }
  getAll<K extends User>(): Observable<BaseResponse<K[]>> {
    return of(
      buildResponse(HttpStatusCode.Ok, Array.from(this._list.values()) as K[])
    ).pipe(delay(2000));
  }
  update<K extends User>(user: K): Observable<BaseResponse<null>> {
    const userUpdate = this._list.get(user.id);
    this._list.set(user.id, { ...userUpdate, ...user });
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
  delete(id: string): Observable<BaseResponse<null>> {
    this._list.delete(id);
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
}
