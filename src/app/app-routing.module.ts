import { ListItemComponent } from './list-item/list-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  /*canActivate: []* Só abre a rota se for
  suprido as necessidades do activate, geralmente um Auth0 */
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'todo', component:ListItemComponent},
  {path: 'vendas', component:TabelaComponent}
    // path de not found { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
