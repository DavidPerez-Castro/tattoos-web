import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

import { TatuajesService } from '../../services/tatuajes.service';
import { Tato } from '../../interfaces/tato.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public tatuajes: Tato[] = [];
  public selectedTato?: Tato;

  constructor(private router: Router, private tatuajesService: TatuajesService) {}


  searchTato() {
    const value: string = this.searchInput.value || '';

    this.tatuajesService.searchTattoos( value )
      .subscribe( tatuajes => this.tatuajes = tatuajes );
  }


  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedTato = undefined;
      return;
    }

    const tato: Tato = event.option.value;

    this.tatuajesService.getTattooById(tato._id).subscribe((fullTato) => {
      if (fullTato) {
        this.selectedTato = fullTato;
        this.searchInput.setValue(fullTato.title);

        // Navegar a la página de detalles de búsqueda con el ID del tatuaje seleccionado
        this.router.navigate(['/tatuajes/search', fullTato._id]);
      }
    });
  }
}
