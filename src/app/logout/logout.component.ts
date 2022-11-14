import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'logoutbutt',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button pButton (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      
    <button (click)="auth.loginWithRedirect()">Login</button>
  </ng-template>
  `,
  styles: [],
})
export class LogoutComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}