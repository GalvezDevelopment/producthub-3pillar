import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseAuth } from '../../interfaces/services/base-auth.interface';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../interfaces/api/base.response';

@Injectable()
export class AuthService implements BaseAuth {
  constructor() {}

  login(email: string, password: string): Observable<BaseResponse<string | null>> {
    throw new Error('Method not implemented.');
  }

  logout(): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
}
