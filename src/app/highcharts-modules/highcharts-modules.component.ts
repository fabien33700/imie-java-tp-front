import { Component, OnInit }              from '@angular/core';
import { AmazingTimePickerService }       from 'amazing-time-picker';
import { Chart }                          from 'angular-highcharts';
import { Options }                        from 'highcharts';
import { ChartDataService, ChartRequest } from '../chart-data.service';

@Component({
  selector   : 'app-highcharts-modules',
  templateUrl: './highcharts-modules.component.html'
})
export class HighchartsModulesComponent implements OnInit {

  readonly MIN_DATE = 1515020486;
  readonly MAX_DATE = 1518618399;

  readonly SERVERS: string[] = ["srv-DC-london_global", "esx-alger-01_global"];

  public chart: Chart;

  private options: Options = {
      chart: { type: 'line' },
      xAxis: { type: 'datetime' },
      title: { text: '' },
      credits: { enabled: false }
    };

  server: string;
  begin: Date;
  end: Date;

  seriesDefs = {
    'cpu0': 'CPU #0',
    'cpu1': 'CPU #1',
    'cpu2': 'CPU #2',
    'cpu3': 'CPU #3',
    'cpu4': 'CPU #4',
    'cpu5': 'CPU #5',
    'cpu6': 'CPU #6',
    'cpu7': 'CPU #7',
    'cpu8': 'CPU #8',
    'memory_used': 'Mémoire utilisée',
    'memory_size': 'Mémoire disponible',
    'traffic_in': 'Trafic entrant',
    'traffic_out': 'Trafic sortant',
    'security_error': 'Erreur sécurité',
    'disk_used': 'Espace disque utilisé',
    'disk_size': 'Taille du disque'
  };


  activeSeries: string[] = [];

  constructor(private atp: AmazingTimePickerService,
              private chartdataService: ChartDataService) {
  }

  private fromTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }

  private toTimestamp(date: Date): number {
    return Math.round(date.getTime()/1000);
  }

  ngOnInit(): void {
    this.server = this.SERVERS[0];
    this.begin = this.fromTimestamp(this.MIN_DATE + 3600);
    this.end = this.fromTimestamp(this.MIN_DATE + 3600 + 86400 - 1);
    this.chart = new Chart(this.options);

  }

  public toggleSeries(key: string) {
    let pos = this.activeSeries.indexOf(key);
    if (pos > -1)
      this.activeSeries.splice(pos, 1);
    else
      this.activeSeries.push(key);
    this.update();
  }

  public selectBeginDate(event: Date) {
    // bug UTC
    event.setHours(event.getHours()+1);
    this.begin = event;

    this.update(true);
  }

  public selectEndDate(event: Date) {
    // bug UTC
    event.setHours(event.getHours()+1);

    // jusqu'au jour de fin comprsi (à 23:59:59)
    event.setHours(event.getHours()+24);
    event.setSeconds(event.getSeconds()-1);
    this.end = event;

    this.update(true)
  }

  public update(flush?: boolean): void {
    if (flush) {
      this.getChartSeries().forEach((serie, i) => this.chart.removeSerie(i))
    } else {
      this.getChartSeries().forEach(serie => {
        if (this.activeSeries.indexOf(serie) == -1)
          this.chart.removeSerie(this.getChartSeries().indexOf(serie));
      });
    }

    this.activeSeries.forEach((serie)  => {
      if (this.getChartSeries().indexOf(serie) == -1) {
        let request: ChartRequest = {
          server: this.server,
          series: [serie],
          begin : this.toTimestamp(this.begin),
          end   : this.toTimestamp(this.end)
        };

        this.chartdataService.getChartData(request).subscribe(data => {
          this.chart.addSerie({
            id  : serie,
            name: this.seriesDefs[serie],
            data: data
          });
        });
      }
    });
  }

  private getChartSeries(): string[] {
      return this.chart.ref.series.map(serie => serie.options.id);
  }
}
