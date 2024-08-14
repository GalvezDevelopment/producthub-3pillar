import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../interfaces/api/base.response';
import { BaseAuth } from '../../interfaces/services/base-auth.interface';

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
