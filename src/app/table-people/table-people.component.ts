import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './../material-components/table-data-source.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Person } from './../models/person';
import { PeopleService } from './../services/people.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css']
})
export class TablePeopleComponent implements OnInit {

  displayedColumns = ['id', 'firstName', 'lastName', 'age', 'city', 'gender', 'isWorking'];
  dataPeople: {};
  subjectDataTable: Subject<{}> = new Subject;
  dataSource: TableDataSource;

  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;
  @ViewChild( 'filter' ) filter: ElementRef;

  constructor( private peopleService: PeopleService) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.peopleService.getPeople().subscribe( (result) => {
      this.subjectDataTable.next(result);
      this.dataPeople = { data: result, dataChange: this.subjectDataTable };
      this.getDataSource();
    });
  }

  private getDataSource() {
    this.dataSource = new TableDataSource( this.dataPeople, this.paginator, this.sort );
  }

  private filterKeyUp()  {
    if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
  }
}
