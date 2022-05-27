import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
