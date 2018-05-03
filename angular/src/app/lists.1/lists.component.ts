import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../list-service.service';
import IListModelAngular from '../share/IListModelAngular';

@Component({
  selector: 'app-list',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() listNumber: number[] = [1,2,3,4];
  lists: IListModelAngular[];

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
