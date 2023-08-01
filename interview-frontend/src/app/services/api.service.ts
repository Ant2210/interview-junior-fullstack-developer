import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { City } from '../models/city';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<City[]>(environment.apiUrl).pipe(
      catchError((error) => {
        throw new Error();
      })
    );
  }
}
