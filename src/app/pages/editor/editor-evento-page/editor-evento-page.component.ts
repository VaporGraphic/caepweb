import { FirebaseStorageServiceService } from './../../../services/storage/firebase-storage-service.service';
import Swal  from 'sweetalert2';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-editor-evento-page',
  templateUrl: './editor-evento-page.component.html',
  styleUrls: ['./editor-evento-page.component.scss']
})
export class EditorEventoPageComponent implements AfterViewInit  {

  @ViewChild('selectorImagen',{static: true}) selectorImagen!: ElementRef;

  selectedImage: any = null;
  selectedImageSrc: any = null;
  selectedImageName: string|null = null;
  isLoadingImage:boolean = false;

  listEventos = [
    1,1,1,1,1,
  ]

  constructor(private modalService: NgbModal,private firebaseStorageService: FirebaseStorageServiceService) { }

  ngAfterViewInit(): void {
  }

 
  open(content:any) {
    this.modalService.open(content, {centered:true, size:'lg', backdrop:'static', beforeDismiss: () => {

      let reslutadoPregunta = confirm('¿Cerrar sin guardar los cambios?');

      

      return reslutadoPregunta;
      }});
  } 

  imageSelected(imagenSeleccionada: any){

    let archivo = imagenSeleccionada.target.files[0];

    if(archivo!= undefined){
      this.selectedImageName = archivo.name;

      let reader = new FileReader();
  
      reader.readAsDataURL(archivo);
  
      reader.onloadstart = ()=>{
        this.isLoadingImage = true;
      };
  
      reader.onloadend=()=>{
        this.isLoadingImage = false;
        this.selectedImageSrc = reader.result;
        this.selectedImage = reader.result;
      }
    }
  
  }

  uploadImage(){
    if(this.selectedImage!=null){
      this.firebaseStorageService.uploadFile(this.selectedImage,'eventos',Date.now().toString()).then(
        resultado=>{
          console.log(resultado);
        }
      );
    }else{
      Swal.fire({
        icon:'question',
        text:'No se ha seleccionado ninguna imagen, por favor selecciona una',
        confirmButtonText:'De acuerto',
      });
    }
  }

 
  
  deleteWarinig(){
    Swal.fire({
      text:'¿Deseas eliminar el post?',
      confirmButtonText:'Eliminar',
      showCancelButton:true,
      confirmButtonColor:'red',
      cancelButtonText:'Cancelar'
    });
  }

}
