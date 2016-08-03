import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthService {
  private _loggedIn: boolean;

  constructor() {
  }

  login(name: String, password: String): boolean {
    if (name === "name" && password === "pw") {
      this._loggedIn = true;
    }
    return this._loggedIn;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }
}



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService, private router : Router){

  }

  canActivate() :boolean {

    if(!this.authService.loggedIn){
      this.router.navigate(['/login']);
    }

    return this.authService.loggedIn;
  }
}
