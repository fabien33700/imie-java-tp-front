import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ChartDataService {
  apiUrl: string ='http://localhost:8080/api/charts?server=srv-DC-london_global&series=cpu0&begin=1515020400&end=1515106800';

  constructor(private http: HttpClient) {
  }
  getChartData(): Observable<Array<[number, number]>> {

    return this.http.get<Array<[number, number]>>(this.apiUrl);
  }
}
