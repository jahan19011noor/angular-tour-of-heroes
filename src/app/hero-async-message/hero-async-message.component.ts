import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-message',
  template: `
    <h2>Async Hero Message and AsyncPipe</h2>
    <p>Message {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>
  `,
  styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent {

  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ]

  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    )
  }

}
