import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CategoriesService } from './categories/categories.service';
import { provideCore } from './core/core.module';
import { ProductsService } from './products/products.service';
import { provideCustomStore } from './store/app-store.module';
import { UsersService } from './users/users.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCore(),
    provideCustomStore(),
    UsersService,
    ProductsService,
    CategoriesService
  ],
};
