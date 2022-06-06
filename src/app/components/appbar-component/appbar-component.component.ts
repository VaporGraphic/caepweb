import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar-component',
  templateUrl: './appbar-component.component.html',
  styleUrls: ['./appbar-component.component.scss']
})
export class AppbarComponentComponent implements OnInit {

  _listSections = [
    {'titulo':'Inicio',
    'route': '/inicio'
    },
    {'titulo':'Oferta academica',
    'route': '/oferta'
    },
    {'titulo':'Atención clínica',
    'route': '/atencion'
    },
    {'titulo':'Eventos',
    'route': '/eventos'
    },
    {'titulo':'Supervision clínica',
    'route': '/supervision'
    },
    {'titulo':'Contactanos',
    'route': '/contacto'
    },
  ];

  _listSocial = [
    {
      'icon': 'bi-facebook',
      'color': 'text-primary',
      'link': 'https://www.facebook.com/psicologia.psicoanalisis.saludmental'
    },
    {
     'icon': 'bi-instagram',
     'color': 'text-secondary',
     'link': 'https://www.instagram.com/caep_mexico/'
   },{
     'icon': 'bi-youtube',
     'color': 'text-danger',
     'link': 'https://www.youtube.com/c/RadioCAEPInternacional'
   },
   {
    'icon': 'bi-whatsapp',
    'color': 'text-success',
    'link': 'https://wa.me/525531453808'
  }
   ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateRoute(route:string){
    console.log(route);
    this.router.navigate([route]);
  }

}
