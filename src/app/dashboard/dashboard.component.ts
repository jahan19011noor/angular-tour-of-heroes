import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { AdItem } from '../ad-item';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []
  ads: AdItem[];
  constructor(private _heroService: HeroService, private adService: AdService) { }

  ngOnInit() {
    this.getHeroes();
    this.ads = this.adService.getAds();
  }

  getHeroes(): void {
    this._heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

}
