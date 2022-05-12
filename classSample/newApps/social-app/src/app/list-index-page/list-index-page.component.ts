import { Component, OnInit } from '@angular/core';
import { ListClass } from '../list-class';
import { TodoApisService } from '../todo-apis.service';

@Component({
  selector: 'app-list-index-page',
  templateUrl: './list-index-page.component.html',
  styleUrls: ['./list-index-page.component.css']
})
export class ListIndexPageComponent implements OnInit {

  results: Array<ListClass> = [];

  constructor(private apiService: TodoApisService) { }

  ngOnInit(): void {
    this.apiService.getLists().subscribe( (result: ListClass[]) =>
      {
        this.results = result;
        console.log("list results:" + JSON.stringify(result));
      }
    );
  }

  link(index:number): string {
    return "/details/" + (index + 1);
  }

}
