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
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { SearchComponent } from './components/search/search.component';
import { MenuuserComponent } from './user/menuuser/menuuser.component';
import { PerfiluserComponent } from './user/perfiluser/perfiluser.component';

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
    SearchPageComponent,
    CardImgComponent,
    FooterPageComponent,
    SearchComponent,

    // Pipes
    TatoImagePipe,
      MenuuserComponent,
      PerfiluserComponent,
  ],
})
export class TatuajesModule { }
