import { Component, OnInit } from '@angular/core';
import { Tato } from '../../interfaces/tato.interface';
import { TatuajesService } from '../../services/tatuajes.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {

  public tatuajes: Tato[] = [];

  constructor( private tatuajesService: TatuajesService ) {}

  ngOnInit() {
    this.tatuajesService.getTatuajes()
    // Se suscribe al observable de la clase servicio para obtener los datos cuando estén listos
    .subscribe( tatuajes => this.tatuajes = tatuajes );
  }

}
