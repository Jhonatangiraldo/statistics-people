import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  @Input() radarChartLabels: string[];
  @Input() radarChartData: object[];
  public radarChartType: string = 'radar';

}
