import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {appRouterProviders} from './app/app.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AuthService, AuthGuard} from './app/login/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[appRouterProviders,AuthService, AuthGuard, disableDeprecatedForms(), provideForms()]);
