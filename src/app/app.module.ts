import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthbutComponent } from './authbut/authbut.component';
import { LogoutComponent } from './login/logout.component';
import { ButtonModule } from 'primeng/button';
import { UserInfoComponent } from './userinfo/userinfo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NotfoundComponent,
    DashboardComponent,
    ListItemComponent,
    AuthbutComponent,
    LogoutComponent,
    UserInfoComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule,
    MatButtonModule,
    AuthModule.forRoot({
      domain: 'dev-8q01sqoycnl7ie70.us.auth0.com',
      clientId: 'sGMJ90l62i7YADDHHkfbiLhnO3n8go71',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
