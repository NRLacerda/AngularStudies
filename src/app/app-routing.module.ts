import { DashboardComponent } from './dashboard/dashboard.component';
import { TesthashComponent } from './testhash/testhash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  /*canActivate: []* Só abre a rota se for
  suprido as necessidades do activate, geralmente um Auth0 */
  { path: 'heroes', component: HeroesComponent },
  { path: 'teste/teste2', component: TesthashComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  
    // path de not found { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
