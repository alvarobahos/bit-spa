import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
