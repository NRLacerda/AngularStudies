import { Message } from './../interface/message';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ListItemComponent } from '../list-item/list-item.component';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {
  private apiUrl='http://localhost:3000/mensagens'

  constructor(private http:HttpClient) { }

  getAll():Observable<Message[]>{
    return this.http.get<Message[]>(this.apiUrl)
  }
}
