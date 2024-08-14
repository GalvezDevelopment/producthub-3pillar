import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CategoriesMockService } from './categories/categories-mock.service';
import { provideCore } from './core/core.module';
import { ProductsMockService } from './products/products-mock.service';
import { provideShared } from './shared/shared.module';
import { provideCustomStore } from './store/app-store.module';
import { UsersMockService } from './users/users-mock.service';
import { ProductsService } from './products/products.service';
import { environment } from '../environments/environment';
import { CategoriesService } from './categories/categories.service';
import { UsersService } from './users/users.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCore(),
    provideCustomStore(),
    provideShared(),
    {
      provide: UsersService,
      useClass: environment.production ? UsersService : UsersMockService,
    },
    {
      provide: CategoriesService,
      useClass: environment.production
        ? CategoriesService
        : CategoriesMockService,
    },
    {
      provide: ProductsService,
      useClass: environment.production ? ProductsService : ProductsMockService,
    },
  ],
};
