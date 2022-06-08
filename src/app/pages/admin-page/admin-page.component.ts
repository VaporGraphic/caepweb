import { AuthfirebaseServiceService } from './../../services/authfirebase-service.service';
import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';

import { LocationStrategy } from '@angular/common';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import {NgbOffcanvas, OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
    // add NgbModalConfig and NgbModal to the component providers
})
export class AdminPageComponent implements OnInit {

  //LOGIN

  email:string = "";
  password:string = "";

    
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

  constructor(private locationStrategy: LocationStrategy, 
    private offcanvasService: NgbOffcanvas,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private authFirebaseService: AuthfirebaseServiceService) {
    
   }

   private paramsSub: any;

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.currentPage = params.get('currentPage');
      if(this.currentPage==null){
        this.isLogged = false
      }else{
        if(this.currentPage === 'Oferta academica' || this.currentPage === 'Eventos' ){
          
        }else{
          this.router.navigateByUrl('/admin' );
        }
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSub.unsubscribe();
  }
  

  login(){

    if(this.email && this.password){
      this.authFirebaseService.loginAdmin(this.email,this.password).then(success=>{
        this.router.navigateByUrl('/admin/Oferta academica' );
      }).catch(error=>{

        Swal.fire(
          {
            icon:'error',
            title:'Oops...',
            text:'No se ha podido iniciar sesion, revisa tus datos'
          }
        );
        
      });
    }else{
      Swal.fire(
        {
          icon:'error',
          title:'Oops...',
          text:'Rellena todos los campos'
        }
      );
    }

  }

  logout(){


    Swal.fire({
      text:'¿Deseas cerrar sesion?',
      showCancelButton: true,
      confirmButtonText: 'Cerrar sesion',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.authFirebaseService.logOut().then(
          success=>{
            this.router.navigateByUrl('/admin' );
          }
        ).catch(
          error=>{
            Swal.fire(
              {
                icon:'error',
                title:'Oops...',
                text:'No se ha podido cerrar la sesion'
              }
            );
          }
        )
      } 
    })


    
  }


  changePage(selectedTitle:string){
    this.currentPage= selectedTitle;
    this.router.navigateByUrl(`/admin/${selectedTitle}` );
  }

  open(content:any) {
    this.offcanvasService.open(content);
  }


  
 

}
