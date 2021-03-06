"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm', 'Fetch any object at any distance', 'Leslie Rollover'),
            new hero_1.Hero(13, 'Bombasto', 'Fetch any object at any distance', 'Leslie Rollover'),
            new hero_1.Hero(15, 'Magneta', 'Fetch any object at any distance', 'Leslie Rollover'),
            new hero_1.Hero(20, 'Tornado', 'Fetch any object at any distance', 'Leslie Rollover'),
            new hero_1.Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover')
        ];
        this.myHero = this.heroes[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1>{{title}}</h1>\n      <h2>My favorite hero is: {{myHero.name}}</h2>\n      <p>Heroes:</p>\n      <ul>\n        <li *ngFor=\"let hero of heroes\">\n          {{ hero.name }}\n        </li>\n      </ul>\n      <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n      <hero-form></hero-form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map