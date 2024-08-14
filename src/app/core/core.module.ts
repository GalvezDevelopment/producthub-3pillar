import { Provider } from '@angular/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { BaseInterceptor } from './interceptors/auth/base.interceptor';
import { AuthService } from './services/auth/auth.service';
import { environment } from '../../environments/environment';
import { AuthMockService } from './mock/base-auth-mock.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const PROVIDERS = [
  {
    provide: AuthService,
    useClass: environment.production ? AuthService : AuthMockService,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseInterceptor,
    multi: true,
  },
  AuthGuard,
];

export function provideCore(): Provider[] {
  return [...PROVIDERS];
}
