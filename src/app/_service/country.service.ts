import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/worldbank';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  getListCountries(): Observable<any> {
    return this.http.get(API_URL + '/countries', { responseType: 'json' });
   }

}
