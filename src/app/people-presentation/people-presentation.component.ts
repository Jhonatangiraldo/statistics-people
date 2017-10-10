import { Person } from './../models/person';
import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-presentation',
  templateUrl: './people-presentation.component.html',
  styleUrls: ['./people-presentation.component.css']
})
export class PeoplePresentationComponent implements OnInit {

  private people: Person[];
  //Pie chart
  public pieChartLabelsSex:string[];
  public pieChartDataSex:number[];
  public pieChartLabelsIsWorking:string[];
  public pieChartDataIsWorking:number[];
  //Radar chart
  public radarChartLabels: string[];
  public radarChartData: object[];

  private Male = 'Male';
  private Female = 'Female';
  private Working = 'Working';
  private NotWorking = 'Not Working';
  private M = 'M';
  private F = 'F';

  constructor( private peopleService: PeopleService ) {}

  ngOnInit() {
    this.getData();
    this.setLabels();
  }

  private setLabels() {
    this.pieChartLabelsSex = [this.Male, this.Female];
    this.pieChartLabelsIsWorking = [this.Working, this.NotWorking];
    this.radarChartLabels = [this.Working, 'Over Eighteen', this.NotWorking, 'Not over Eighteen'];
  }

  private getData() {
    this.peopleService.getPeople().subscribe( (result) => {
      this.people = result;
      this.getPieChartData();
      this.getRadarChartData();
    });
  }

  private getPieChartData() {
    let Male = this.people.filter((person) => person.sex === this.M).length;
    let feMale = this.people.filter((person) => person.sex === this.F).length;
    let working = this.people.filter((person) => person.isWorking === true).length;
    let notWorking = this.people.filter((person) => person.isWorking === false).length;

    this.pieChartDataSex = [Male, feMale];
    this.pieChartDataIsWorking = [working, notWorking];
  }

  private getRadarChartData() {
    //Male
    let workingM = this.people.filter((person) => person.isWorking === true && person.sex === this.M).length;
    let notWorkingM = this.people.filter((person) => person.isWorking === false && person.sex === this.M).length;
    let overEighteenM = this.people.filter((person) => person.age >= 18 && person.sex === this.M).length;
    let notOverEighteenM = this.people.filter((person) => person.age < 18 && person.sex === this.M).length;
    //FeMale
    let workingF = this.people.filter((person) => person.isWorking === true && person.sex === this.F).length;
    let notWorkingF = this.people.filter((person) => person.isWorking === false && person.sex === this.F).length;
    let overEighteenF = this.people.filter((person) => person.age >= 18 && person.sex === this.F).length;
    let notOverEighteenF = this.people.filter((person) => person.age < 18 && person.sex === this.F).length;

    this.radarChartData = [  { data: [ workingM, overEighteenM,notWorkingM, notOverEighteenF ], label: this.Male },
                             { data: [ workingF, notWorkingF, overEighteenF, notOverEighteenF ], label: this.Female },
                          ];

  }

}
