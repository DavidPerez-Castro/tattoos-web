import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TatoPageComponent } from './pages/tato-page/tato-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
// localhost:4200/tatuajes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [ //Rutas Hijas
      { path: 'home', component: HomePageComponent},
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'new-tato', component: NewPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'search/:id', component: SearchPageComponent },
      { path: ':id', component: TatoPageComponent},
      { path: '**', redirectTo: 'home' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TatuajesRoutingModule { }
