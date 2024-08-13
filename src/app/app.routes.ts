import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'categories',
        loadComponent: () => import('./categories/categories.component').then(c => c.CategoriesComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        loadComponent: () => import('./users/users.component').then(c => c.UsersComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
];
