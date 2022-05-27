import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  
  
  listAboutUs = [
    {
      'icon': 'bi-person-heart',
      'title': 'Nosotros',
      'text': 'CAEP es una institución con una ideología seria y con el compromiso de servicio clínico y enseñanza. Se cuenta con la actualización y difusión psicoanalítica para que sus alumnos obtengan un mejor aprendizaje respeto y preparación. Conscientes del compromiso que juega nuestro papel en la línea de la salud mental, acompañados de un espíritu de conducta profesional ante los pacientes. Su ideología institucional ofrece fortalecer la vocación por la línea humana basada en la honestidad e integridad; comprometida con el desarrollo de su comunidad y con un conjunto de valores culturales, históricos y sociales de nuestro país.'
    },
    {
      'icon': 'bi-compass',

      'title': 'Mision',
      'text': ' Estamos seriamente comprometidos con la atención clínica, enseñanza y constante actualización psicoanalítica para la salud mental del individuo y su adecuada integración con la sociedad.'
    },
    {
      'icon': 'bi-eye',
      'title': 'Visión',
      'text': 'Ser una de las principales instituciones que genere salud mental a través del conocimiento permanente en en área psicoanalítica con los individuos y la sociedad para un mejor coexistir.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  leerMas(titulo:string, info:string , icon:string){

    Swal.fire({
      html:
      `<p class="lead fw-bold"> ${titulo}</p>` +
      `<i class="bi ${icon}"></i> <br>`+
    `<br> <p> ${info} </p>`,
    confirmButtonText:
    'Listo',
    })
  }

  
  navigateRoute(route:string){
    console.log(route);
    this.router.navigate([route]);
  }

}
