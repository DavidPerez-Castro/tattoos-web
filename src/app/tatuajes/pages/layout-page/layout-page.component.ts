import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tato } from '../../interfaces/tato.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './home' },
    { label: 'Productos', icon: 'category', url: './product' },
    { label: 'Sobre nosotros', icon: 'info', url: './about' },
    { label: 'Contacto', icon: 'contacts_product', url: './contact' },
    //{ label: 'Buscar', icon: 'search', url: './search' },
  ]

}
