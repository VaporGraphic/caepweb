import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppbarComponentComponent } from './components/appbar-component/appbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfertaPageComponent } from './pages/oferta-page/oferta-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { AtencionPageComponent } from './pages/atencion-page/atencion-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { SupervisionPageComponent } from './pages/supervision-page/supervision-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppbarComponentComponent,
    FooterComponentComponent,
    OfertaPageComponent,
    ContactoPageComponent,
    AtencionPageComponent,
    ServiciosPageComponent,
    SupervisionPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
