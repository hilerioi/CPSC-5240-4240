import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-list-detailes-page',
  templateUrl: './list-detailes-page.component.html',
  styleUrls: ['./list-detailes-page.component.css']
})
export class ListDetailesPageComponent implements OnInit {
  listId: number = 0;
  constructor(private route: ActivatedRoute, private listService: TodoApiService) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.params['id'];
    console.log('listId: ' + this.listId);
    this.listService.getSpecificList(this.listId).subscribe((result: any) => 
    {
      console.log('result' + JSON.stringify(result));
    });

  }

}
