import { ModalService } from './services/modal.service';
import { mainReducer } from './reducer/reducer';
import { PeopleService } from './services/people.service';
import { MaterialModule } from './material-components/material-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { PeoplePresentationComponent } from './people-presentation/people-presentation.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { TablePeopleComponent } from './table-people/table-people.component';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** IMPORTANT : IE10 and IE11 requires the following to support `@angular/animation` (which is used by this module).
Run `npm install --save web-animations-js`.
*/
import 'web-animations-js';

// Import library
import { NgNotifyPopup, NotificationService } from 'ng2-notify-popup';

@NgModule({
  declarations: [
    AppComponent,
    PeoplePresentationComponent,
    PieChartComponent,
    RadarChartComponent,
    TablePeopleComponent,
    AddUserComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(mainReducer),
    ReactiveFormsModule,
    NgNotifyPopup
  ],
  providers: [
    PeopleService,
    ModalService,
    NotificationService,
  ],
  entryComponents: [AddUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
