import { DataTable } from './../models/dataTable';
import { Person } from './../models/person';
import { Component, NgModule } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-table-data-source',
})

export class TableDataSource extends DataSource<{}> {
    private _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(public dataTable: DataTable,
                private _paginator: MatPaginator,
                private _sort: MatSort) {
      super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Person[]> {
      const displayDataChanges = [
        this.dataTable.dataChange,
        this._paginator.page,
        this._sort.sortChange,
        this._filterChange
      ];

      return Observable.merge(...displayDataChanges).map(() => {
        // Filter Data
        let dataTable = this.dataTable.data.slice().filter((item: Person) => {
          let searchStr = (item.id + item.firstName + item.lastName + item.age +
                           item.city + item.gender + item.isWorking).toLowerCase();
          return searchStr.includes(this.filter.toLowerCase());
        });

        // sorted
        const data = this.getSortedData(dataTable);

        // paginated
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
      });
    }

    /** Returns a sorted copy of the database data. */
    getSortedData(data): Person[] {
      if (!this._sort.active || this._sort.direction === '') { return data; }

      return data.sort( (a, b) => {
        let propertyA: number|string = '';
        let propertyB: number|string = '';

        switch (this._sort.active) {
          case 'id':
                [propertyA, propertyB] = [a.id, b.id];
            break;
          case 'firstName':
                [propertyA, propertyB] = [a.firstName, b.firstName];
            break;
          case 'lastName':
                [propertyA, propertyB] = [a.lastName, b.lastName];
            break;
          case 'age':
                [propertyA, propertyB] = [a.age, b.age];
            break;
          case 'city':
                [propertyA, propertyB] = [a.city, b.city];
            break;
          case 'gender':
                [propertyA, propertyB] = [a.gender, b.gender];
            break;
          case 'isWorking':
                [propertyA, propertyB] = [a.isWorking, b.isWorking];
            break;
          case 'job':
                [propertyA, propertyB] = [a.isWorking, b.isWorking];
            break;
          case 'delete':
            [propertyA, propertyB] = [a.id, b.id];
            break;
        }

        let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }

    disconnect() {}
  }
