//This service pulls the data using the here.service
// before the hero-detail component loads
// it has been created by using the followng url from online
// https://shermandigital.com/blog/wait-for-data-before-rendering-views-in-angular-2/
// it has brought changes to the hero-detail.component.ts file as well
// it has also made changes to the /detail route in the app-routing.component.ts


import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from "./hero.service"
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero | string> {

  constructor(private heroService: HeroService,
    private router: Router) { }

  //------------- this code does not work and gives a promise related error
  // resolve(route: ActivatedRouteSnapshot): Promise | boolean {
  //   let id = +route.params['id'];

  //   return this.heroService.getHero(id).subscribe(hero => {
  //     if (hero) {
  //       return hero;
  //     }
  //     else {
  //       this.router.navigate(['/dashboard'])
  //       return false
  //     }
  //   })
  // }
  //---------- this code does not work and gives a promise related error

  //---------- this code is an implementation of what we learned in Angular Crud Tutorial

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Hero | string> {
      let id = +route.params['id'];
      return this.heroService.getHero(id)
    }

  //---------- this code is an implementation of what we learned in Angular Crud Tutorial
  
}
