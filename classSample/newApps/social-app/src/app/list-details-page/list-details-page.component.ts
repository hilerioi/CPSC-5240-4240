import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoApisService } from '../todo-apis.service';

@Component({
  selector: 'app-list-details-page',
  templateUrl: './list-details-page.component.html',
  styleUrls: ['./list-details-page.component.css']
})
export class ListDetailsPageComponent implements OnInit {
  listId: number = 0;

  constructor(private route: ActivatedRoute, private apiService: TodoApisService) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.params['id'];
    console.log('listId: ' + this.listId);
    this.apiService.getSpecificList(this.listId).subscribe((result: any) => 
    {
      console.log('detail result' + JSON.stringify(result));
    });
  }

}
