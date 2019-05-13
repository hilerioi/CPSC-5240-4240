import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../list-service.service';
import IListModelAngular from '../share/IListModelAngular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  listsObservable: Observable<IListModelAngular[]>;

  @Input() listNumber: number[] = [1,2,3,4];

  constructor(list$: ListsService) {
    this.listsObservable = list$.getListsIndex();
  }

  ngOnInit() {
  }

}