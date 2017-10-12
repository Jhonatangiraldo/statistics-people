import { Person } from './../models/person';
import { MaterialModule } from './../material-components/material-imports.module';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'ng2-notify-popup';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public age: number;
  public city: string;
  public gender: string;
  public isWorking: boolean;
  private genders: {}[];
  private isWorkingOptions: {}[];

  private firstNameFormControl: FormControl;
  private lastNameFormControl: FormControl;
  private ageFormControl: FormControl;
  private cityFormControl: FormControl;

  constructor( public dialogRef: MatDialogRef<AddUserComponent>,
               private notify: NotificationService ) { }

  ngOnInit() {
    this.setFields();
    this.setFormControls();
  }

  private setFields(): void {
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
    this.city = '';
    this.gender = 'M';
    this.isWorking = false;
    this.genders = [
      { text: 'Male', value: 'M' },
      { text: 'Female', value: 'F' },
    ];
    this.isWorkingOptions = [
      { text: 'Yes', value: true },
      { text: 'Not', value: false },
    ];
  }

  private setFormControls() {
    this.firstNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.ageFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^([1-9]|[1-9]\d)$/)
    ]);

    this.cityFormControl = new FormControl('', [
      Validators.required
    ]);
  }

  private createUser(): void {
    if (!this.validationFields()) {
      this.showErrorInValidation();
      return;
    } else {
      let user: Person = this.fillUserInformation();
      this.dialogRef.close(user);
    }
  }

  private fillUserInformation(): Person {
    let user: Person = new Person;
    user.id = null;
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.age = this.age;
    user.city = this.city;
    user.gender = this.gender;
    user.isWorking = this.isWorking;
    return user;
  }

  private validationFields(): boolean {
    return this.firstName.length > 0  && this.lastName.length > 0 &&
          this.age > 0 && this.city.length > 0;
  }

  private showErrorInValidation() {
    let message: string = 'Complete all fields (and write an age with minimum 1)';
    let options: {} = { position:'top', duration:'2000', type: 'error' };
    this.notify.show(message, options);
  }
}
