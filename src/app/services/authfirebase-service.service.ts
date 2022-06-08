import Swal from "sweetalert2"
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseServiceService {

  

  constructor(private firebaseAuth: AngularFireAuth) { }


  loginAdmin(email:string, password:string){
      return this.firebaseAuth.signInWithEmailAndPassword(email,password)
  }


  logOut(){
    return this.firebaseAuth.signOut()
    
  }
}
