import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() pieChartLabels: string[];
  @Input() pieChartData: number[];
  public pieChartType:string = 'pie';
}
