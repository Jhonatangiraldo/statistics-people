import { SETPEOPLE } from './../reducer/reducer';
import { Store } from '@ngrx/store';
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

  public displayedColumns = ['id', 'firstName', 'lastName', 'age', 'city', 'gender', 'isWorking', 'job'];
  private dataPeople: {};
  private peopleStore: Store<{}>;
  private subjectDataTable: Subject<{}> = new Subject;
  private dataSource: TableDataSource;

  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;
  @ViewChild( 'filter' ) filter: ElementRef;

  constructor( private peopleService: PeopleService,
               private store:Store<any> ) {
    this.peopleStore = this.store.select('people');
  }

  ngOnInit() {
    this.setReducerSubscription();
  }

  private setReducerSubscription(): void {
    this.peopleStore.subscribe( (result) => {
      this.subjectDataTable.next(result);
      this.dataPeople = { data: result, dataChange: this.subjectDataTable };
      this.getDataSource();
    });
  }

  private getDataSource(): void {
    this.dataSource = new TableDataSource( this.dataPeople, this.paginator, this.sort );
  }

  private filterKeyUp(): void {
    if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
  }

  private deleteFirstUser(): void {
    this.dataSource.dataTable.data.splice(0, 1);
    this.renderDataRedux();
  }

  private getJob(row): void {
    this.dataSource.dataTable.data.find( (item) => item.id === row.id).isWorking = true;
    this.renderDataRedux();
  }

  private loseJob(row): void {
    this.dataSource.dataTable.data.find( (item) => item.id === row.id).isWorking = false;
    this.renderDataRedux();
  }

  private renderDataRedux(): void {
    let sizeData = this.dataSource.dataTable.data.length;
    this.dataSource.dataTable.data = this.dataSource.dataTable.data.slice(0, sizeData);
    this.store.dispatch( { type: SETPEOPLE, payload: this.dataSource.dataTable.data } );
  }
}