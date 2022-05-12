import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';
import { ListClass } from '../list-class';

@Component({
  selector: 'app-list-index-page',
  templateUrl: './list-index-page.component.html',
  styleUrls: ['./list-index-page.component.css']
})
export class ListIndexPageComponent implements OnInit {

  results: Array<ListClass>= [];

  constructor(private listService: TodoApiService) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe( (result: ListClass[]) => 
    {
      this.results = result;
    });
  }

  link(i:number): string {
    return '/listdetails/' + (i+1);
  }

}
