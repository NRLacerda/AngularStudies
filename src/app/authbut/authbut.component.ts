import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authbut',
  templateUrl: './authbut.component.html',
  styleUrls: ['./authbut.component.css']
})
export class AuthbutComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
