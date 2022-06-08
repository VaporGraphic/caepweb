import  firebase  from 'firebase/compat/app';
import  Swal  from 'sweetalert2';
import { Injectable } from '@angular/core';


import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageServiceService {

  storeRef = firebase.app().storage().ref();

  constructor(private storage: AngularFireStorage) { }

  async uploadFile(imagenBase64:any, origen:string, fecha:string ) {
    
    try {
   
     let task = await this.storeRef.child(`${origen}/${fecha}`).putString(imagenBase64,'data_url');

      return await task.ref.getDownloadURL();
    
    } catch (error) {

      Swal.fire(
        {
          icon:'error',
          text:'No se ha podido subir la imagen seleccionada, intenta de nuevo',
          confirmButtonText:'De acuerdo'
        }
      );
        
        console.log(error);

      return null;
    }
    
  }
}
