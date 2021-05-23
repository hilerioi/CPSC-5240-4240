import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IRatingModelAngular from './share/IRatingModelAngular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingPublishedService {
  private ratingsUrl = 'http://localhost:8080/app/rating';  // URL to web api

  getRatings() : Observable<IRatingModelAngular[]> {
    return this.http.get<IRatingModelAngular[]>(this.ratingsUrl)
  }
  
  constructor(private http: HttpClient,) { }
}
