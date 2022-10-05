import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[]=[]

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: selected Hero id=$(hero.id)')
  }
  constructor(private heroService: HeroService, private messageService:MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=> this.heroes=heroes);
  }
}
