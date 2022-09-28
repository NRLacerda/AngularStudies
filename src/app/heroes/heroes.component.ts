import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };*/

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
  constructor() {}
  ngOnInit(): void {}
}
