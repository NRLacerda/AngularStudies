import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'userinfo',
  template: `
    <ul *ngIf="auth.user$ | async as user">
      <h2>Bem vindo novamente! {{ user.name }}</h2>
    </ul>`
})
export class UserInfoComponent {
  constructor(public auth: AuthService) {}
}