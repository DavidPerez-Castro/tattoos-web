import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TatuajesRoutingModule } from './tatuajes-routing.module';
import { MaterialModule } from '../material/material.module';

import { TatoPageComponent } from './pages/tato-page/tato-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CardComponent } from './components/card/card.component';
import { TatoImagePipe } from './pipes/tato-image.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TatuajesRoutingModule,
    MaterialModule,

  ],
  declarations: [
    HomePageComponent,
    TatoPageComponent,
    LayoutPageComponent,
    ProductPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    CardComponent,

    // Pipes
    TatoImagePipe,
  ],
})
export class TatuajesModule { }