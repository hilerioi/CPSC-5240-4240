import { Component, OnInit } from '@angular/core';
import IRatingModelAngular from '../share/IRatingModelAngular';
import { RatingPublishedService } from '../rating-published.service';
import { Observable, of } from 'rxjs';
import { Ratings } from '../share/Ratings';

@Component({
  selector: 'app-rating-published',
  templateUrl: './rating-published.component.html',
  styleUrls: ['./rating-published.component.less']
})
export class RatingPublishedComponent implements OnInit {
  ratings : any

  getRatings(): void {
    this.ratingPublishedService.getRatings().subscribe((data)=>this.ratings=data)
    
  } 
  
  constructor(private ratingPublishedService: RatingPublishedService) { }

  ngOnInit(): void {
    this.getRatings();
  }

}
