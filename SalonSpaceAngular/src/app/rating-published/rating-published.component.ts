import { Component, OnInit } from '@angular/core';
import { SalonSpaceService } from '../salon-space.service';

@Component({
  selector: 'app-rating-published',
  templateUrl: './rating-published.component.html',
  styleUrls: ['./rating-published.component.less']
})
export class RatingPublishedComponent implements OnInit {
  ratings : any

  getRatings(): void {
    this.salonSpaceService.getRatings().subscribe((data)=>this.ratings=data)
    
  } 
  
  constructor(private salonSpaceService: SalonSpaceService) { }

  ngOnInit(): void {
    this.getRatings();
  }

}
