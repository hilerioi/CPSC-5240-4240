import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {ListClass} from './list-class';

@Injectable({
  providedIn: 'root'
})
export class TodoApisService {

  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getLists(){
    return this.http.get<ListClass[]>(this.hostUrl + 'data/lists.json');
  }
  getSpecificList(id:number){
    return this.http.get<any>(this.hostUrl + 'data/lists/' + id + '.json');
  }

}
