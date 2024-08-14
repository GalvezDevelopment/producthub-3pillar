import { Injectable } from '@angular/core';
import { BaseService } from '../core/interfaces/services/base-service.interface';
import { User } from '@producthub/domain';
import { Observable } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements BaseService<User> {

  constructor() { }
  
  add<K extends User>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  getById<K extends User>(id: string): Observable<BaseResponse<K | null>> {
    throw new Error('Method not implemented.');
  }
  getAll<K extends User>(): Observable<BaseResponse<K[]>> {
    throw new Error('Method not implemented.');
  }
  update<K extends User>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
}
