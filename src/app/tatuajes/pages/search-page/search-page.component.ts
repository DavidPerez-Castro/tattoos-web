import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tato } from '../../interfaces/tato.interface';
import { TatuajesService } from '../../services/tatuajes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit{
  public selectedTato?: Tato;

  constructor(
    private tatuajesService: TatuajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const tatoId = params['id'];

      this.tatuajesService.getTattooById(tatoId).subscribe((fullTato) => {
        if (fullTato) {
          this.selectedTato = fullTato;
        } else {
          // Si no se encuentra el tatuaje, redirige a la página de productos
          this.router.navigate(['/tatuajes/product']);
        }
      });
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/tatuajes/product');
  }
}
