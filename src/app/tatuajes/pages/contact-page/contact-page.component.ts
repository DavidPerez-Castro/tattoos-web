import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TatuajesService } from '../../services/tatuajes.service';
import { Contact } from '../../interfaces/tato.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {

  email = new FormControl('', [Validators.required, Validators.email]);

  contact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    matter: '',
    message: ''
  };

  constructor(private tatuajesService: TatuajesService){}

  sendEmail() {
    this.contact.email = this.email.value ?? '';
    this.tatuajesService.sendEmail(this.contact).subscribe(
      respuesta => {
        console.log('Formulario enviado con éxito:', respuesta);
        alert('Mensaje enviado con éxito!');
        this.resetForm();
      },
      error => {
        console.error('Error al enviar el formulario:', error);
        alert('Lo siento, su mensaje no se pudo enviar. Por favor, inténtelo de nuevo.');
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Correo electrónico no válido' : '';
  }

  isEmailValid(): boolean {
    return this.email.valid || this.email.pristine;
  }

  isFormValid(): boolean {
    return this.isEmailValid() &&
      this.contact.firstName.trim() !== '' &&
      this.contact.lastName.trim() !== '' &&
      this.contact.matter.trim() !== '' &&
      this.contact.message.trim() !== '';
  }

  resetForm(): void {
    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      matter: '',
      message: ''
    };
    this.email.reset();
  }
}
