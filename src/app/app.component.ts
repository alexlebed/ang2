import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <h2>My favorite hero is: {{myHero.name}}</h2>
      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          {{ hero.name }}
        </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes!</p>
      <hero-form></hero-form>
    </div>
  `

})

export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm', 'Fetch any object at any distance', 'Leslie Rollover'),
    new Hero(13, 'Bombasto', 'Fetch any object at any distance', 'Leslie Rollover'),
    new Hero(15, 'Magneta', 'Fetch any object at any distance', 'Leslie Rollover'),
    new Hero(20, 'Tornado', 'Fetch any object at any distance', 'Leslie Rollover'),
    new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover')
];
  myHero = this.heroes[0];

}
