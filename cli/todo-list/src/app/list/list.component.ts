import { Observable } from 'rxjs'; ///add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListsService } from '../list-service.service';
import Item from '../share/Item';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  listId: string;
  private listObservable: Observable<Item>;
  private listItems: Item;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private list$: ListsService
  ) { 
    this.listId = route.snapshot.params['id'];
    this.list$.getItems(this.listId).subscribe((res: Item) => {
      this.name = res.name;
      this.listItems = res;
    });
  }

  ngOnInit():void {}

}
