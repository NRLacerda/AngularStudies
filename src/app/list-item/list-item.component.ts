import { ListitemService } from '../services/listitem.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../interface/message';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  messages:Message[]=[]
  
  // Meio estranho, mas tem 2 listitem pq o primeiro é o do componente, o segundo é a referência
  constructor(private ListitemService:ListitemService) { 
    this.getMessages()
  }
  ngOnInit(): void {
  }
  getMessages():void{
    this.ListitemService.getAll().subscribe((messages)=>(this.messages=messages))
  }
}
