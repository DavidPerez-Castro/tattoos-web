import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent implements OnInit {
  firstName: string | null = '';

  constructor(public authService: AuthService) {}

  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './home' },
    { label: 'Productos', icon: 'category', url: './product' },
    { label: 'Sobre nosotros', icon: 'info', url: './about' },
    { label: 'Contacto', icon: 'contacts_product', url: './contact' },
    //{ label: 'Buscar', icon: 'search', url: './search' },
  ]

  ngOnInit(): void {
    // Recuperar el nombre del usuario del localStorage al inicializar el componente
    this.firstName = this.authService.getFirstName() || '';
  }

  logout(): void {
    this.authService.logout();
    console.log('Usuario desautenticado:', this.authService.isLoggedIn);
    // Puedes realizar otras acciones después de cerrar sesión, como redirigir a la página de inicio, etc.
  }

}
