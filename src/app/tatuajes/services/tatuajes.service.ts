import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

import { Tato } from '../interfaces/tato.interface';
import { environments } from '../../../environments/environments.prod';

import { Contact } from '../interfaces/tato.interface';
import {contact } from '../../../environments/environments'

@Injectable({providedIn: 'root'})
export class TatuajesService {
  private baseUrl: string = environments.baseUrl;
  private apiContact: string = contact.apiContact;

  constructor(private http: HttpClient) { }

  //Muestra todos los tatuajes
  getTattoos():Observable<any>{
    return this.http.get(`${this.baseUrl}/`);
  }

  //Buscar tatuajes
  searchTattoos(query: string): Observable<Tato[]> {
    return this.http.get<Tato[]>(`${this.baseUrl}/search?query=${query}`);
  }

  //Obtener tatuaje por id
  getTattooById(id: string): Observable<Tato> {
    return this.http.get<Tato>(`${this.baseUrl}/${id}`);
  }

  //Contact
  sendEmail(contact: Contact):  Observable<any> {
    return this.http.post(`${this.apiContact}/`, contact);
  }

}
