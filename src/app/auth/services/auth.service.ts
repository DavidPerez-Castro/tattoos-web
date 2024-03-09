// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiAuth = 'http://localhost:3000/api/auth';
  isLoggedIn = !!localStorage.getItem('token');
  userInformation: any = {};

  constructor(private http: HttpClient) {
    this.loadUserInformation();
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiAuth}/register`, user);
  }

  private loadUserInformation(): void {
    const storedUserInformation = localStorage.getItem('userInformation');
    if (storedUserInformation) {
      this.userInformation = JSON.parse(storedUserInformation);
    } else {
      this.userInformation = {};
    }
  }

  private saveUserInformation(): void {
    localStorage.setItem('userInformation', JSON.stringify(this.userInformation));
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiAuth}/login`, user).pipe(
      tap((response: any) => {
        //console.log('Inicio de sesión exitoso:', response);

        // Verifica si el correo electrónico está presente en la respuesta
        if (response.firstName) {
          localStorage.setItem('firstName', response.firstName);
          this.userInformation.firstName = response.firstName;
          //console.log('Nombre:', response.firstName); // Agrega este mensaje de consola
        } else {
          //console.error('Nombre no presente en la respuesta del servidor');
        }

        localStorage.setItem('token', response.token);
        this.isLoggedIn = true;
        this.saveUserInformation();
        //console.log('userInformation:', this.userInformation);
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
    this.userInformation = {};
    this.saveUserInformation();
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiAuth}/users`);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiAuth}/users/${userId}`);
  }
}
