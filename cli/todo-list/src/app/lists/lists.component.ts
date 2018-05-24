import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../list-service.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: any;
  @Input() listNumber: number[] = [1,2,3,4];

  constructor(list$: ListsService) { 
    list$.getListsIndex()
    .subscribe(
      result => this.lists = result,
      () => {},
      () => console.log('REST call:' + this.lists)
    );
  }

  ngOnInit() {
  }

}
