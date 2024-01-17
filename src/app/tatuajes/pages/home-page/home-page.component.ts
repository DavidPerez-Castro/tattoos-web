import { Component, OnInit, HostListener } from '@angular/core';
import { Tato } from '../../interfaces/tato.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  images = [
    { url: './assets/tatuajes/tatuaje-ave.jpg', text: 'Simbolo de la libertad', price: 350},
    { url: './assets/tatuajes/tatuaje-rosas.jpg', text: 'Rosas', price: 900},
    { url: './assets/tatuajes/tatuaje-pato.jpg', text: 'Pato feliz', price: 400},
    { url: './assets/tatuajes/tatuaje-tigre.jpg', text: 'Tigre', price: 350},
    { url: './assets/tatuajes/tatuaje-dragon.jpg', text: 'Dragón Japones', price: 600},
    { url: './assets/tatuajes/tatuaje-padrehija.jpg', text: 'Padre e hija', price: 400},
  ];

  currentStartIndex = 0;
  visibleImages: any[] = [];

  ngOnInit() {
    this.showImages();
  }

  showImages() {
    if (window.innerWidth >= 768) { // Dispositivos de escritorio o tablets (ancho mayor o igual a 768px)
      this.visibleImages = this.images.slice(this.currentStartIndex, this.currentStartIndex + 3);
    } else { // Dispositivos móviles (ancho menor a 768px)
      this.visibleImages = this.images.slice(this.currentStartIndex, this.currentStartIndex + 1);
    }
  }

  previousImages() {
    if (this.currentStartIndex > 0) {
      this.currentStartIndex -= 3;
      this.showImages();
    }
  }

  nextImages() {
    if (this.currentStartIndex + 3 < this.images.length) {
      this.currentStartIndex += 3;
      this.showImages();
    }
  }
}
