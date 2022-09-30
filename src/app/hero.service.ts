import { Injectable } from '@angular/core';
import { Hero } from './interface/hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes():Hero[]{
    return HEROES
  }
}
