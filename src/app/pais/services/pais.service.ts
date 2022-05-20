import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.inteface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';
  
  get httpParams(){
    return new HttpParams().set('fields','name,cca2,cca3,capital,flags,population,translations')
  }
  constructor(private http: HttpClient) { }

  bucarPais(termino:string): Observable<Country>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country>(url);
      // .pipe(
      //   catchError(err => of([]))
      // ); Regresa el valor especificado
  }

  buscarCapital(termino:string): Observable<Country>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country>(url,{params: this.httpParams});
  }

  getPaisPorAlpha(id: string){
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url,{params: this.httpParams});
  }

  buscarRegion(region: string): Observable<Country>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country>(url,{params: this.httpParams});
  }
}
