import { Injectable } from '@angular/core';
import { ListClass } from "./list-class";
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/lists.json';

  constructor(private http: HttpClient) {
  }

  getLists(){
    return this.http.get<ListClass[]>(this.hostUrl + 'data/lists.json');
  }
}
