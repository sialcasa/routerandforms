import {RouterConfig, provideRouter} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BankingComponent} from './banking/banking.component';
import {KontostandComponent} from './banking/kontostand/kontostand.component';
import {UeberweisungComponent} from './banking/ueberweisung/ueberweisung.component';
import {AuthService, AuthGuard} from './login/auth.service';

const appRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'banking',
    canActivate: [AuthGuard],
    component: BankingComponent,
    children: [
      {
        path: '',
        redirectTo: 'kontostand',
        pathMatch: 'full'
      },
      {
        path: 'kontostand',
        component: KontostandComponent
      },
      {
        path: 'ueberweisung',
        component: UeberweisungComponent
      }
    ]
  }
];


export const appRouterProviders = [
  provideRouter(appRoutes)
];
