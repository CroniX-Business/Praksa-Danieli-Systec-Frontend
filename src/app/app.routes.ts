import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';
import { DominikRegisterComponent } from './pages/Dominik_register/Dominik_register.component';
import { DominikErrorComponent } from './pages/Dominik_error/Dominik_error.component';
import { DominikMainComponent } from './pages/Dominik_main/Dominik_main.component';
import { DominikRestaurantComponent } from './pages/Dominik_restaurant/Dominik_restaurant.component';
import { DominikCategoryComponent } from './pages/Dominik_category/Dominik_category.component';
import { AppRoutesConfig } from './configs/routes.config';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routeNames.login, pathMatch: 'full' },
  {
    path: AppRoutesConfig.routeNames.login,
    component: DominikLoginComponent,
    title: 'Login page',
  },
  {
    path: AppRoutesConfig.routeNames.category,
    component: DominikCategoryComponent,
    title: 'Category page',
  },
  {
    path: AppRoutesConfig.routeNames.restaurant,
    component: DominikRestaurantComponent,
    title: 'Restaurant page',
  },
  {
    path: AppRoutesConfig.routeNames.main,
    component: DominikMainComponent,
    title: 'Main page',
  },
  {
    path: AppRoutesConfig.routeNames.register,
    component: DominikRegisterComponent,
    title: 'Register page',
  },
  { path: '**', component: DominikErrorComponent, title: 'Error page' },
];
