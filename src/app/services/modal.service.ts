import { Observable } from 'rxjs/Observable';
import { AddUserComponent } from './../add-user/add-user.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable()
export class ModalService {

  constructor( public dialog: MatDialog ) { }

  public openAddUser(): Observable<{}> {
    let dialogRef = this.dialog.open(AddUserComponent, {
      width: '550px',
      height: '580px'
    });

    return dialogRef.afterClosed();
  }

}
