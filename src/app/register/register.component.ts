import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from '../models/account';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addForm!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authServ:AuthService,
    private router:Router) { 
    this.addForm = this.formBuilder.group({
      Name:["",[Validators.required,Validators.minLength(3)]],
      UserName:['',[Validators.required,Validators.pattern(/^(?=.{6,10}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/)]],
      Password:["",[Validators.required,Validators.minLength(8)]],
    })
  }
  add()
  {
    console.log(this.addForm.value)
    this.authServ.register(this.addForm.value as UserRegister).subscribe({
      next:(res)=>{
        this.router.navigateByUrl("/user/login")
      },
      error:(err)=>console.log(err)
    })
  }
  ngOnInit(): void {
  }

}
