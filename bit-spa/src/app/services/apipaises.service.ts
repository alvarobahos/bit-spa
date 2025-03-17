import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApipaisesService {
  private urlApi = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) {}

  public getpaises(): Observable<any> {
    return this.http.get(this.urlApi);
  }
}
