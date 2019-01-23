import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // heroes = HEROES
  heroes: Hero[]
  selectedHero: Hero;

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(
      heros => this.heroes = heros
    );
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this._heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this._heroService.delete(hero).subscribe();
  }

}
