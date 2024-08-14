import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BaseResponse } from '../../interfaces/api/base.response';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  constructor(private _messageService: MessageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((response: HttpEvent<any>) => {
        if (response.type === HttpEventType.Response) {
          const baseResponse = response.body as BaseResponse<any>;
          if (baseResponse.status !== HttpStatusCode.Ok) {
            this._messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se pudo completar la transacción',
            });

            console.log('[App] Error', baseResponse.error);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ah ocurrido un error en el servidor',
        });
        console.log('[Server] Error', error);

        return throwError(() => error);
      })
    );
  }
}
