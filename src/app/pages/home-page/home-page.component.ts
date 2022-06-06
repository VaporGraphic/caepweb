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


  
  imageObject: Array<object> = [
    {
      image: 'https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/281144581_2287325514753084_6522208894657366562_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH28aKSjbukgLC-U63BS-9gWPwIqdPqSoNY_Aip0-pKg_zv610bP7dsq2Tz6Vi8LqwBaVv2fQiTbQ8oA4roKmnp&_nc_ohc=CNw5KSSpB20AX8Y7V1Q&tn=w7eWj-oxsm3fTr8v&_nc_ht=scontent.fmex23-1.fna&oh=00_AT9BZaqVQl4WcqElLLam1RvNfjKMOdgTFGV5U3yQ-NOZ7w&oe=62961D73',
      thumbImage: 'https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/281144581_2287325514753084_6522208894657366562_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH28aKSjbukgLC-U63BS-9gWPwIqdPqSoNY_Aip0-pKg_zv610bP7dsq2Tz6Vi8LqwBaVv2fQiTbQ8oA4roKmnp&_nc_ohc=CNw5KSSpB20AX8Y7V1Q&tn=w7eWj-oxsm3fTr8v&_nc_ht=scontent.fmex23-1.fna&oh=00_AT9BZaqVQl4WcqElLLam1RvNfjKMOdgTFGV5U3yQ-NOZ7w&oe=62961D73',
      alt: 'alt of image',
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
