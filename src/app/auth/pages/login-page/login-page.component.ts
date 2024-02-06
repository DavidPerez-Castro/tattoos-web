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
        // Manejar la respuesta del servidor, por ejemplo, guardar el token en el localStorage.
        console.log('Token:', response.token);
        this.router.navigate(['/tatuajes/home']);

        console.log('Usuario autenticado:', this.authService.isLoggedIn);
      },
      error => {
        // Manejar errores
        console.error('Error:', error);
      }
    );
  }
}
