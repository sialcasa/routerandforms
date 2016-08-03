import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(form: any) {
    let loggedIn = this.authService.login(form['username'], form['password']);
    if (!loggedIn) {
      alert("Passwort oder Username falsch")
    } else {
      this.router.navigate(['/banking']);
    }
  }
}
