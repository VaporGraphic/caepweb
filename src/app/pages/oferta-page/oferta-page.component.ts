import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta-page',
  templateUrl: './oferta-page.component.html',
  styleUrls: ['./oferta-page.component.scss']
})
export class OfertaPageComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

  seleccionarModalidad(seleccion:string){
    this.modalidadSeleccionada = seleccion;
  }

}
