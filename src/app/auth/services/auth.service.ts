import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiAuth = 'http://localhost:4000/api/auth';
  isLoggedIn = !!localStorage.getItem('token');
  firstName: string | null = localStorage.getItem('firstName');

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiAuth}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiAuth}/login`, user).pipe(
      tap((response: any) => {
        console.log('Inicio de sesión exitoso:', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('firstName', response.firstName); // Guarda el nombre en localStorage
        this.isLoggedIn = true;
      })
    );
  }

  getFirstName(): string | null {
    return localStorage.getItem('firstName');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    this.isLoggedIn = false;
    this.firstName = null;
  }
}
