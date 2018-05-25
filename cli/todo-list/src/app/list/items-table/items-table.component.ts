import {Input, Component, OnInit } from '@angular/core';
import ITaskModelAngular from '../../share/ITaskModelAngular';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html'
})
export class ItemsTableComponent implements OnInit {
@Input() items: ITaskModelAngular[];

  constructor() { }

  ngOnInit() {
  }

}
