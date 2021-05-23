import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalonSpaceService } from '../salon-space.service';
import ITechnicianModelAngular from '../share/ITechnicianModelAngular';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.less']
})
export class TechnicianListComponent implements OnInit {
  techniciansObservable: Observable<ITechnicianModelAngular[]>;
  constructor(salon$:SalonSpaceService) {
     this.techniciansObservable=salon$.getTechnicianLists();
   }
   
  ngOnInit(): void {
  }

}
