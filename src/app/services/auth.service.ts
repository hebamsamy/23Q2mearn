import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthrized:boolean 
  loggedSubject:Subject<boolean>
  constructor() {
    this.loggedSubject= new Subject<boolean>()
    this.loggedSubject.next(this.isLogged())
    this.isAuthrized = this.isLogged()
   }
   login(usernmae:string,password:string){
    ///call ap1
    //recive token
    //save 
    this.setToken(usernmae)
    // this.isAuthrized =true
    this.loggedSubject.next(true)
   }
   logout(){
    this.removeToken()
    // this.isAuthrized =false
    this.loggedSubject.next(false)
   }

   setToken(token:string){
    localStorage.setItem("token",token)
   }
   getToken():string{
   return localStorage.getItem("token")??""
   }
   removeToken(){
    localStorage.removeItem("token")
   }
   isLogged():boolean{
    if (localStorage.getItem("token")==null) {
      return false
      
    } else {
      return true
    }
   }
}
