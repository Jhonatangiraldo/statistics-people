import { PeopleState } from './../reducer/appStates';
import { SETPEOPLE } from './../reducer/reducer';
import { Person } from './../models/person';
import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

const MALE = 'Male';
const FEMALE = 'Female';
const WORKING = 'Working';
const NOTWORKING = 'Not Working';
const M = 'M';
const F = 'F';

@Component({
  selector: 'app-people-presentation',
  templateUrl: './people-presentation.component.html',
  styleUrls: ['./people-presentation.component.css']
})


export class PeoplePresentationComponent implements OnInit {

  private people: Person[];
  private peopleStore: Store<{}>;
  //Pie chart
  public pieChartLabelsSex:string[];
  public pieChartDataSex:number[];
  public pieChartLabelsIsWorking:string[];
  public pieChartDataIsWorking:number[];
  //Radar chart
  public radarChartLabels: string[];
  public radarChartData: object[];

  constructor( private peopleService: PeopleService,
               private store:Store<PeopleState> ) {
    this.peopleStore = this.store.select('people');
  }

  ngOnInit() {
    this.people = [];
    this.setReducerSubscription();
    this.setLabels();
    this.getData();
  }

  private setReducerSubscription(): void {
    this.peopleStore.subscribe( (result: Person[]) => {
      this.people = result
      this.getPieChartData();
      this.getRadarChartData();
    });
  }

  private setLabels(): void {
    this.pieChartLabelsSex = [MALE, FEMALE];
    this.pieChartLabelsIsWorking = [WORKING, NOTWORKING];
    this.radarChartLabels = [WORKING, 'Over Eighteen', NOTWORKING, 'Not over Eighteen'];
  }

  private getData(): void {
    this.peopleService.getPeople().subscribe( (result: Person[]) => {
      this.store.dispatch({ type: SETPEOPLE, payload: result});
    });
  }

  private getPieChartData(): void {
    let Male = this.people.filter((person) => person.gender === M).length;
    let feMale = this.people.filter((person) => person.gender === F).length;
    let working = this.people.filter((person) => person.isWorking === true).length;
    let notWorking = this.people.filter((person) => person.isWorking === false).length;

    this.pieChartDataSex = [Male, feMale];
    this.pieChartDataIsWorking = [working, notWorking];
  }

  private getRadarChartData(): void {
    // Male
    let workingM = this.people.filter((person) => person.isWorking === true && person.gender === M).length;
    let notWorkingM = this.people.filter((person) => person.isWorking === false && person.gender === M).length;
    let overEighteenM = this.people.filter((person) => person.age >= 18 && person.gender === M).length;
    let notOverEighteenM = this.people.filter((person) => person.age < 18 && person.gender === M).length;
    // Female
    let workingF = this.people.filter((person) => person.isWorking === true && person.gender === F).length;
    let notWorkingF = this.people.filter((person) => person.isWorking === false && person.gender === F).length;
    let overEighteenF = this.people.filter((person) => person.age >= 18 && person.gender === F).length;
    let notOverEighteenF = this.people.filter((person) => person.age < 18 && person.gender === F).length;

    this.radarChartData = [  { data: [ workingM, overEighteenM, notWorkingM, notOverEighteenF ], label: MALE },
                             { data: [ workingF, notWorkingF, overEighteenF, notOverEighteenF ], label: FEMALE },
                          ];
  }
}
