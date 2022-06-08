import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';

import { LocationStrategy } from '@angular/common';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
    // add NgbModalConfig and NgbModal to the component providers
})
export class AdminPageComponent implements OnInit {

  listOfertas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
  //UTILS

  isLogged: boolean = true;

  currentPage:string | null= 'Oferta academica';

  listBtn =[
    {
      icon:'bi-book',
      title:'Oferta academica',
    },
    {
      icon:'bi-mic',
      title:'Eventos',
    },

  ]

  constructor(private locationStrategy: LocationStrategy, private activatedRoute: ActivatedRoute, private router: Router ) {
    
   }

   private paramsSub: any;

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.currentPage = params.get('currentPage');

      if(this.currentPage== 'Eventos' || this.currentPage== 'Oferta academica' ){

      }else{
        this.router.navigateByUrl('/admin' );
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSub.unsubscribe();
  }
  

  login(){
    Swal.fire({
      icon: 'success',
      title: 'Sesion iniciada',
      text: 'Administra, modifica o elimina los elementos de tu pagina desde aqui',
      confirmButtonText: 'Entendido',
    })

    this.setLogged();
    
  }

  setLogged(){
    this.isLogged = true;
    history.pushState(null, 'null', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, 'null', location.href);
    }) 
  }

  changePage(selectedTitle:string){
    this.currentPage= selectedTitle;
    this.router.navigateByUrl(`/admin/${selectedTitle}` );

  }


  puedeSalir(){
    return confirm('Para salir del administrador tienes que cerrar sesion');
  }

 

}
