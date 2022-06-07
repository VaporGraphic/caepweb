import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appbar-component',
  templateUrl: './appbar-component.component.html',
  styleUrls: ['./appbar-component.component.scss']
})
export class AppbarComponentComponent implements OnInit {

  _listSections = [
    {titulo:'Inicio',
    route: '/inicio',
    selected:false
    },
    {titulo:'Oferta academica',
    route: '/oferta'
    ,selected:false
    },
    {titulo:'Atención clínica',
    route: '/atencion'
    ,selected:false

    },
    {titulo:'Supervision clínica',
    route: '/supervision'
    ,selected:false

    },
    {titulo:'Eventos',
    route: '/eventos'
    ,selected:false

    },
    {titulo:'Contactanos',
    route: '/contacto'
    ,selected:false
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

  
   
  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    this.establecerSeleccion(this.router.url);
  }

  

  navigateRoute(route:string){
    this.establecerSeleccion(route);
    this.router.navigate([route]);
  }

  establecerSeleccion(route:string){
    for (let index = 0; index < this._listSections.length; index++) {
      if(this._listSections[index].route!== route){
        this._listSections[index].selected = false;
      }else{
        this._listSections[index].selected = true;
      }
    }

  }

}
