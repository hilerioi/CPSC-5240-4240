import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import IListModelAngular from '../share/IListModelAngular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: IListModelAngular[];
  

  constructor(private list$: TodoServiceService) { 

    list$.getListsIndex().subscribe((result: IListModelAngular[]) => {
      this.lists = result;
    });
/*    this.lists = [ 
      {name: "list 1", description: "description 1", due: "today", items: "5"}, 
      {name: "list 2", description: "description 2", due: "today", items: "4"}, 
      {name: "list 3", description: "description 3", due: "today", items: "6"}, 
    ];
*/    
  }

  ngOnInit() {
  }

}
