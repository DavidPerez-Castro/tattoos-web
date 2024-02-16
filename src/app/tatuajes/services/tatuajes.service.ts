import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

import { Tato } from '../interfaces/tato.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class TatuajesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  //Endpoint Http
  //Función emitiendo un arreglo de Tato
  getTatuajes():Observable<Tato[]>{
    return this.http.get<Tato[]>(`${ this.baseUrl }/tatuajes`);
  }

  getTatoById( id: string ): Observable<Tato|undefined> {
    return this.http.get<Tato>(`${this.baseUrl}/tatuajes/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching tato with ID ${id}:`, error);
          return of(undefined);
        })
      );
  }

  getSuggestions( query: string ): Observable<Tato[]> {
    return this.http.get<Tato[]>(`${ this.baseUrl }/tatuajes?q=${ query }&_limit=6`);
  }

  addTato( tato: Tato ): Observable<Tato> {
    return this.http.post<Tato>(`${ this.baseUrl }/tatuajes`, tato );
  }

  updateTato( tato: Tato ): Observable<Tato> {
    if ( !tato.id ) throw Error('Tatoo id is required');

    return this.http.patch<Tato>(`${ this.baseUrl }/tatuajes/${ tato.id }`, tato );
  }

  deleteTatoById( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/tatuajes/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }
}
