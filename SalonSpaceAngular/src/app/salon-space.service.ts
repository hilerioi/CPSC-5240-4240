import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITechnicianModelAngular from './share/ITechnicianModelAngular';

@Injectable()
export class SalonSpaceService {
  hostUrl:string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getTechnicianLists() {
    return this.httpClient.get<ITechnicianModelAngular[]>( this.hostUrl + 'app/technician');// + 'json/lists.json'
  }
}
