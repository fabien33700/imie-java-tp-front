import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {ChartDataService} from '../chart-data.service';

@Component({
  selector: 'app-highcharts-modules',
  templateUrl: './highcharts-modules.component.html'
})
export class HighchartsModulesComponent implements OnInit{

  private chart: Chart;

  ngOnInit(): void {
    this.chartdataService.getChartData().subscribe(result => {
      result.forEach(([time, value]) => console.log(time, "hello", value));
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        xAxis: {
          type: 'datetime'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Line 1',
          data: result,
        }]
      });
    });
  }


  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  public selectedTime = '12:30';

  constructor(private atp: AmazingTimePickerService, private chartdataService : ChartDataService) { }

  open() {
    const amazingTimePicker = this.atp.open({
      onlyHour: true,
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
    });
  }
 public selectDate = '5/2/2018';

}
