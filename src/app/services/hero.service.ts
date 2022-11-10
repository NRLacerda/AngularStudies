import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) {

   }
  getHeroes():Observable<Hero[]>{
    const heroes= of (HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}
