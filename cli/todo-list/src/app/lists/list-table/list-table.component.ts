import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  @Input() list: any;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
