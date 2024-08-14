import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { buildResponse } from '../../utils/http-responses.utils';
import { BaseResponse } from '../interfaces/api/base.response';
import { BaseAuth } from '../interfaces/services/base-auth.interface';

const mockedToken = `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNocmlzdGlhbiBHYWx2ZXoiLCJpYXQiOjE1MTYyMzkwMjJ9.pEMiuCkhDnQt9bSEcBvnl-5gib2sJCVcQ9cRYEbEpq4
`;

@Injectable()
export class AuthMockService implements BaseAuth {
  login(email: string, password: string): Observable<BaseResponse<string | null>> {
    if (email === 'cgalvezj@hotmail.com' && password === '123456') {
        return of(buildResponse(HttpStatusCode.Ok, mockedToken)).pipe(delay(2000));
    } else {
        return of(buildResponse(HttpStatusCode.Unauthorized, null)).pipe(delay(2000));
    }
  }
  logout(): Observable<BaseResponse<null>> {
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
}
