import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent implements OnInit {
  userInformation: any = {};
  showUserMenu: boolean = false;

  constructor(public authService: AuthService) {}

  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './home' },
    { label: 'Productos', icon: 'category', url: './product' },
    { label: 'Sobre nosotros', icon: 'info', url: './about' },
    { label: 'Contacto', icon: 'contacts_product', url: './contact' },
    { label: 'Añadir', icon: 'add', url: './new-tato' },
  ];

  ngOnInit(): void {
    // Recuperar la información del usuario al inicializar el componente
    this.userInformation = this.authService.userInformation;
  }

  openUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  logout(): void {
    this.authService.logout();
    this.userInformation = {};
    this.showUserMenu = false;
    console.log('Usuario desautenticado:', this.authService.isLoggedIn);
  }

}
