import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-highcharts-modules',
  templateUrl: './highcharts-modules.component.html'
})
export class HighchartsModulesComponent {
  chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3, 4, 5],
    }]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
