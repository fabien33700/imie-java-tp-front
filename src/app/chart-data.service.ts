import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map }        from 'rxjs/operators';

export interface ChartRequest {
  server: string;
  series: string[];
  begin?: number;
  end?: number;
}

export declare type Data = [number, number];

@Injectable()
export class ChartDataService {
  readonly ENDPOINT = 'http://localhost:8080/api/charts';

  constructor(private http: HttpClient) {}

  getChartData(request: ChartRequest): Observable<Data[]> {
    const source = this.http.get<Data[]>(this.resolve(request));
    return source.pipe(map(data => data.map(ChartDataService.processData)))
  }

  protected static processData(raw: Data): Data {
    return [raw[0] * 1000, raw[1]]
  }

  protected resolve(request: ChartRequest): string {
    if (!request) return this.ENDPOINT;

    let parts: Array<[string, string]> = [];
    parts.push(['server', request.server]);
    request.series.forEach(serie =>
      parts.push(['series', serie]));

    if (request.begin)
      parts.push(['begin', request.begin.toString()]);

    if (request.end)
      parts.push(['end', request.end.toString()]);


    return this.ENDPOINT + "?" + parts
      .map(tuple => tuple.join("="))
      .join("&");
  }
}
