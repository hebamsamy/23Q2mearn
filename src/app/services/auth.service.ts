import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin, UserRegister } from '../models/account';
import { ApiResult } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthrized:boolean 
  loggedSubject:Subject<boolean>
  constructor(private http:HttpClient) {
    this.loggedSubject= new Subject<boolean>()
    this.loggedSubject.next(this.isLogged())
    this.isAuthrized = this.isLogged()
   }
   register(user:UserRegister):Observable<ApiResult<boolean>>{
    return this.http.post<ApiResult<boolean>>(`https://api.mohamed-sadek.com/user/post`,user)
   }
   login(user:UserLogin):Observable<ApiResult<string>>{
    ///call ap1
    return this.http.post<ApiResult<string>>(`https://api.mohamed-sadek.com/user/login`,user)
    //recive token
    //save 
    
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
