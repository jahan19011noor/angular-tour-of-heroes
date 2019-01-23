import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private _messageService: MessageService,
    private _httpClient: HttpClient
  ) { }

  private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]>{
    // this._messageService.add('HeroService: fetched heroes')
    // return of(HEROES);
    return this._httpClient.get<Hero[]>(this.heroesUrl)
                .pipe(
                  tap(_ => this.log('fetched heroes')),
                  catchError(this.handleError('getHeroes', []))
                );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this._httpClient.get<Hero>(url)
              .pipe(
                tap(_ => this.log(`fetched hero id= ${id}`)),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
              )
    // this._messageService.add(`HeroService: fetched hero id=${id}`)
    // return of(HEROES.find(hero => hero.id === id))
  }

  updateHero(hero: Hero): Observable<void> {
    return this._httpClient.put<void>(this.heroesUrl, hero, this.httpOptions)
                .pipe(
                  tap(_ => this.log(`updated hero id = ${hero.id}`)),
                  catchError(this.handleError<any>('updateHero'))
                )
  }

  addHero (hero: Hero): Observable<Hero> {
    return this._httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions)
                .pipe(
                  tap((hero: Hero) => this.log(`add hero w/ id=${hero.id}`)),
                  catchError(this.handleError<Hero>('addHero'))
                )
  }

  delete (hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this._httpClient.delete<Hero>(url, this.httpOptions)
        .pipe(
          tap(_ => this.log(`deleted hero id=${id}`)),
          catchError(this.handleError<Hero>('deleteHero'))
        )
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._httpClient.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this._httpClient.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
}
