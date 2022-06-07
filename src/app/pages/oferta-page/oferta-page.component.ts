import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Botones, TitularPagina } from 'src/app/models/titulares';

@Component({
  selector: 'app-oferta-page',
  templateUrl: './oferta-page.component.html',
  styleUrls: ['./oferta-page.component.scss']
})
export class OfertaPageComponent implements OnInit {

  //TITULARES

  pageInfo: TitularPagina = {
    titulo: 'Oferta academica',
    subtitulo: 'Conoce nuestras ofertas academicas, cursos y talleres que tenemos diseñados para ti ',
    descripcion: 'Comunícate con nosotros y con gusto te atenderemos para asesorarte al inscribirte en algún taller o curso',
    icon: '../../../assets/images/oferta/oferta-academica-dark.webp',
  }

  primaryBtn: Botones ={
    texto: 'Ver video',
    icono: 'bi-play-fill',
    function: ()=>{
      console.log('Primer btn');
    }
  }

  secondaryBtn: Botones ={
    texto: 'Solicitar informacion',
    icono: 'bi-whatsapp',
    function: ()=>{
      console.log('secondary');
    }
  }

  //UTILS

  ListModalidades = [
    {
      'tipo': 'Ver todos'
    },
    {
      'tipo': 'Presencial'
    },
    {
      'tipo': 'En linea'
    },
    {
      'tipo': 'Mixto'
    },

  ]

  modalidadSeleccionada:string = this.ListModalidades[0].tipo;


  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  seleccionarModalidad(seleccion:string){
    this.modalidadSeleccionada = seleccion;
  }

}
