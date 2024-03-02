import { Component, OnInit } from '@angular/core';
import { Tato } from '../../interfaces/tato.interface';
import { TatuajesService } from '../../services/tatuajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {

  tato: any[] = [];

  constructor( private tatuajesService: TatuajesService, private route: ActivatedRoute ) {}

  ngOnInit():void {
    this.tatuajesService.getTattoos()
    .subscribe( (data) => { this.tato = data;
    });
  }

}
