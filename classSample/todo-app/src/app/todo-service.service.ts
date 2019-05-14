import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IListModelAngular from './share/IListModelAngular';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  hostUrl:string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getListsIndex() {
    return this.httpClient.get<IListModelAngular[]>( this.hostUrl + 'json/lists.json');
  }

  getItems(index: string) {
    return this.httpClient.get( this.hostUrl + 'json/lists/' + index + '.json');
  }

}
