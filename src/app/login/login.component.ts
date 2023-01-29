import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from '../models/account';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  returnPath=""
  constructor(
    private authServ:AuthService,
    private formbuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ) {
    this.loginForm = this.formbuilder.group({
      UserName:['',[Validators.required,Validators.pattern(/^(?=.{6,10}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/)]],
      Password:["",[Validators.required,Validators.minLength(8)]],
    })

    ///get url 
    this.route.paramMap.subscribe((pram)=>
    {
      this.returnPath = pram.get("url")??""
    })
   }

  ngOnInit(): void {
  }
login(){
  this.authServ.login(this.loginForm.value as UserLogin).subscribe({
    next:(res)=>{
      console.log(res)
      this.authServ.setToken(res.Data)
      this.authServ.loggedSubject.next(true)
      this.router.navigateByUrl(this.returnPath)
    },
    error:(err)=>{
      console.log(err)
    }
  })

}
}
