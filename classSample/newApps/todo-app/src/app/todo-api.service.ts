import { Injectable } from '@angular/core';
import { ListClass } from "./list-class";
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/lists.json';

  constructor(private http: HttpClient) {
  }

  getLists(){
    return this.http.get<ListClass[]>(this.hostUrl + 'data/lists.json');
  }
  getSpecificList(id:number){
    return this.http.get<any>(this.hostUrl + 'data/lists/' + id + '.json');
  }

}
