import { EventosPageComponent } from './pages/eventos-page/eventos-page.component';
import { SupervisionPageComponent } from './pages/supervision-page/supervision-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { AtencionPageComponent } from './pages/atencion-page/atencion-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { OfertaPageComponent } from './pages/oferta-page/oferta-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomePageComponent },
  { path: 'oferta', component: OfertaPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'atencion', component: AtencionPageComponent },
  { path: 'servicios', component: ServiciosPageComponent },
  { path: 'supervision', component: SupervisionPageComponent },
  { path: 'eventos', component: EventosPageComponent },
  { path: '**', pathMatch: 'full', 
        redirectTo: 'servicios' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
