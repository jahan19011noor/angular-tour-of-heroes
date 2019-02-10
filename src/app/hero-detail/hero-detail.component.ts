import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero

  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) { }

  ngOnInit() {
    //this was the initial code created using angular.io doc
    // this.getHero()
    //this was the initial code created using angular.io doc

    // after creating the hero-detail.resolver this code has bene used
    this._route.data.subscribe(
      (data: { hero: Hero }) => {
        this.hero = data.hero;
      }
    )
    // after creating the hero-detail.resolver this code has bene used
  }

  // after creating the hero-detail.resolver.service
  // this code is no longer needed
  // getHero(): void {
  //   const id = +this._route.snapshot.paramMap.get('id')
  //   this._heroService.getHero(id)
  //       .subscribe(hero => this.hero = hero);
  // }
  // after creating the hero-detail.resolver.service
  // this code is no longer needed

  save(): void {
    this._heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
  }

  goBack(): void {
    this._location.back();
  }

}
