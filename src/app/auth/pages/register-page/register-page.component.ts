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
  };

  constructor(private authService: AuthService, private router: Router) {}

  register(){
    this.authService.register(this.user).subscribe(
      (response) => {
        //console.log('Registro exitoso', response);
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        //console.error('Error en el registro', error);
      }
    );
  }
}
