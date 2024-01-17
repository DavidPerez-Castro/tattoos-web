import { Component, OnInit } from '@angular/core';
import { TatuajesService } from '../../services/tatuajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Tato, Details } from '../../interfaces/tato.interface';

@Component({
  selector: 'app-tato-page',
  templateUrl: './tato-page.component.html',
})
export class TatoPageComponent implements OnInit {

  public tato?: Tato;
  public date?: Details;

  constructor(
    private tatuajesService: TatuajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      //delay(3000),
      switchMap( ({ id }) => this.tatuajesService.getTatoById( id ) ),
    )
    .subscribe( tato => {
      if ( !tato ) return this.router.navigate([ '/tatuajes/product' ]);

      this.tato = tato;
      //console.log({tato})
      return;
    })
  }

  goBack():void {
    this.router.navigateByUrl('tatuajes/product')
  }
}
