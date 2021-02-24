import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ListServiceService } from '../list-service.service';
import { ListClass } from '../list-class';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})

export class ListPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'due', 'state', 'owner'];
  dataSource = new MatTableDataSource<ListClass>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private $list: ListServiceService) {
    $list.getLists().subscribe( (result: ListClass[]) => 
    {
      this.dataSource = new MatTableDataSource<ListClass>(result);
      this.dataSource.sort = this.sort;
      console.log("retrieved data from server.");
    });
  }

  ngOnInit(): void {
    
  }

  clickEvent(): void {
    this.router.navigate(['']);
  }

}
