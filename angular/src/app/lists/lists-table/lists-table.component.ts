import {Input, Component, OnInit } from '@angular/core';
import IListModelAngular from '../../share/IListModelAngular';

@Component({
  selector: 'list-table',
  templateUrl: './lists-table.component.html',
  styleUrls: ['./lists-table.component.css']
})
export class ListsTableComponent implements OnInit {
@Input() list: IListModelAngular;
@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
