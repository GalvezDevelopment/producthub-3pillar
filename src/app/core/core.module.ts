import { Provider } from '@angular/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { AuthService } from './services/auth/auth.service';
import { environment } from '../../environments/environment';
import { AuthMockService } from './mock/base-auth-mock.service';

const PROVIDERS = [
  {
    provide: AuthService,
    useClass: environment.production ? AuthService : AuthMockService,
  },
  AuthInterceptor,
  AuthGuard,
];

export function provideCore(): Provider[] {
  return [...PROVIDERS];
}
