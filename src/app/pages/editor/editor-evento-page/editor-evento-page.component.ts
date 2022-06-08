import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editor-evento-page',
  templateUrl: './editor-evento-page.component.html',
  styleUrls: ['./editor-evento-page.component.scss']
})
export class EditorEventoPageComponent implements OnInit {

  mostrarEditor:boolean = false;

  titulo:string = "Editar";


  listEventos = [
    1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirEditor(){
    this.mostrarEditor=true;
  }

  open(content:any) {
    this.modalService.open(content, {centered:true, size:'lg', backdrop:'static', beforeDismiss: () => {
      return confirm('¿Cerrar sin guardar los cambios?');
      }});
  }
  

}
