import { AuthfirebaseServiceService } from './services/authfirebase-service.service';
import { TextosServiceService } from './services/textos-service.service';
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


//IMAGE SLIDER
import { NgImageSliderModule } from 'ng-image-slider';
import { EventosPageComponent } from './pages/eventos-page/eventos-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EditorEventoPageComponent } from './pages/editor/editor-evento-page/editor-evento-page.component';
import { EditorOfertaPageComponent } from './pages/editor/editor-oferta-page/editor-oferta-page.component';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { FirebaseStorageServiceService } from './services/storage/firebase-storage-service.service';

//STORAGE


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
    EventosPageComponent,
    AdminPageComponent,
    EditorEventoPageComponent,
    EditorOfertaPageComponent,
  ],
  imports: [
    FormsModule,
    NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthfirebaseServiceService,
    FirebaseStorageServiceService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
