import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.worldbank.org/v2/country';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private http: HttpClient) { }

  getListIndicators(country: string): Observable<any>{
    return this.http.get(API_URL + `/${country}/indicator/SI.POV.DDAY?format=json`, {responseType: 'json'});
  }
}
