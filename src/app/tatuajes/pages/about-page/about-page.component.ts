import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {
  tiles= [
    {image: './assets/tatuajes/tatuaje-about-one.jpg'},
    {image: './assets/tatuajes/tatuaje-about-two.jpg'},
    {image: './assets/tatuajes/tatuaje-about-three.jpg'},
    {image: './assets/tatuajes/tatuaje-about-four.jpg'},
  ];

}
