import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ListsService } from '../list-service.service';
import ITaskModelAngular from '../share/ITaskModelAngular';
import IListModelAngular from '../share/IListModelAngular';
import Item from '../share/Item';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  listId: string;
  listItems: Item; // ITaskModelAngular[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private list$: ListsService
  ) { 
    this.listId = route.snapshot.params['id'];
    list$.getItems(this.listId)
    .subscribe(
      result => {
        this.listItems = result.tasks;
        this.name = result.name;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit():void {}

}
