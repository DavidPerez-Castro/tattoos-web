import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  user = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.user).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        console.log('Token:', response.token);
        console.log('Nombre:', response.firstName);
        this.router.navigate(['/tatuajes/home']);

        console.log('Usuario autenticado:', this.authService.isLoggedIn);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
