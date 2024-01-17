import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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
        catchError(error => of(undefined))
      );
  }

}
