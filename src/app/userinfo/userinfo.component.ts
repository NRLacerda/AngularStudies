import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'userinfo',
  template: `
    <ul *ngIf="auth.user$ | async as user">
      
      <p class="user" >{{ user.name }}  </p>
    </ul>`,
  styleUrls: ['./userinfo.component.css']
})
export class UserInfoComponent {
  constructor(public auth: AuthService) {}
}