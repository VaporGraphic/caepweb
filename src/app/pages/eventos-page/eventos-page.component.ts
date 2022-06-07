import { Botones, TitularPagina } from './../../models/titulares';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-page',
  templateUrl: './eventos-page.component.html',
  styleUrls: ['./eventos-page.component.scss']
})
export class EventosPageComponent implements OnInit {

  constructor() { }

  pageInfo: TitularPagina = {
    titulo: 'Eventos',
    subtitulo: 'Conoce nuestros eventos en vivo y podcast que tenemos para tí',
    descripcion: 'Espacio de difusión cultural, educativo y de participación social.',
    icon: '../../../assets/images/eventos/eventos-icon.webp',
  }

  primaryBtn: Botones ={
    texto: 'Eventos Radio CAEP',
    icono: 'bi-youtube',
    function: ()=>{
      console.log('Primer btn');
    }
  }

  secondaryBtn: Botones ={
    texto: 'Eventos Facebook',
    icono: 'bi-facebook',
    function: ()=>{
      console.log('secondary');
    }
  }


  ngOnInit(): void {
  }

  

}
