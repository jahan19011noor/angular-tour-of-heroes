import { Component } from '@angular/core';

@Component({
  selector: 'app-power-boster',
  template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{ 2 | exponentialStrength: 10 }}</p>
  `,
  styleUrls: ['./power-boster.component.css']
})
export class PowerBosterComponent { }
