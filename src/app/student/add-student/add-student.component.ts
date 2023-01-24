import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AddtionStudent, Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  std:AddtionStudent ={FirstName:"ITI",LastName:"alex",NationalID:"0000000",Email:"oooo@gmail.com",Age:30,Mobile:"09999999999"};

  constructor(private stdServ:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.stdServ.addStudent(this.std).subscribe(res=>{
      if(res.Success){
        this.router.navigateByUrl("/vendor/students")
      }
      else{
        alert("try again later")
      }
    })
  }
}
