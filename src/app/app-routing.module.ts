import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailResolverService } from './hero-detail.resolver.service';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { HeroJsonListComponent } from './hero-json-list/hero-json-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'detail/:id', 
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolverService
    }
  },
  { path: 'calculator', component: PowerBoostCalculatorComponent },
  { path: 'flying-heroes', component: FlyingHeroesComponent },
  { path: 'hero-message', component: HeroAsyncMessageComponent },
  { path: 'hero-json-list', component: HeroJsonListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
