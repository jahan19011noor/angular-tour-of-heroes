import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBosterComponent } from './power-boster/power-boster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroJsonListComponent } from './hero-json-list/hero-json-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AdBannerComponent,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    PowerBosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroJsonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AppModule { }
