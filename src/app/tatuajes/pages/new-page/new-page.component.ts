import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Style, Tato } from '../../interfaces/tato.interface';
import { TatuajesService } from '../../services/tatuajes.service';

import { ComfirmDialogComponent } from '../../components/comfirm-dialog/comfirm-dialog.component';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public tatoForm = new FormGroup({
    id:        new FormControl<string>(''),
    title: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl(''),
    price: new FormControl<number>(0),
    style: new FormControl<Style>( Style.Acuarela ),
    image:    new FormControl(''),
  });

  public styles = [
    { id: 'Acuarela', desc: 'Acuarela' },
    { id: 'Estilo Mexicano Tradicional', desc: 'Estilo Mexicano Tradicional' },
    { id: 'Estilo Tradicional b/n', desc: 'Estilo Tradicional b/n' }
  ];


  constructor(
    private tatuajesService: TatuajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  get currentTato(): Tato {
    const tato = this.tatoForm.value as Tato;
    return tato;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.tatuajesService.getTatoById( id ) ),
      ).subscribe( tato => {

        if ( !tato ) {
          return this.router.navigateByUrl('/');
        }

        this.tatoForm.reset( tato );
        return;
      });

  }



  onSubmit():void {

    if ( this.tatoForm.invalid ) return;

    if ( this.currentTato.id ) {
      this.tatuajesService.updateTato( this.currentTato )
        .subscribe( tato => {
          this.showSnackbar(`${ tato.title } updated!`);
        });

      return;
    }

    this.tatuajesService.addTato( this.currentTato )
      .subscribe( tato => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
        this.router.navigate(['/tatuajes/edit', tato.id ]);
        this.showSnackbar(`${ tato.title } created!`);
      });
  }

  onDeleteTato() {
    if ( !this.currentTato.id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ComfirmDialogComponent, {
      data: this.tatoForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.tatuajesService.deleteTatoById( this.currentTato.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/tatuajes']);
      });

    // dialogRef.afterClosed().subscribe(result => {
    //   if ( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if ( wasDeleted )
    //       this.router.navigate(['/heroes']);
    //   })
    // });

  }


  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }


}
