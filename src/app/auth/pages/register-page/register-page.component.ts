import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
    // Agrega otros campos necesarios para el registro
  };

  constructor(private authService: AuthService, private router: Router) {}

  register(){
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        // Realiza acciones adicionales después del registro si es necesario
        // Redirigir a la página de inicio de sesión u otra página después del registro
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        console.error('Error en el registro', error);
        // Manejar el error, mostrar un mensaje al usuario, etc.
      }
    );
  }
}
