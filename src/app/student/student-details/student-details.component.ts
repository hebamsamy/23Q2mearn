import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  currentID:number =0;
  isloading:boolean=true;
  std:Student ={ID:0,Name:"",NationalID:"",Email:"",Age:0,Mobile:""};
  constructor(private route:ActivatedRoute,private stdServ:StudentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      this.currentID  = Number( data.get("id"))
      this.stdServ.getOneStudentById(this.currentID).subscribe(res=>{
        this.std = res.Data
        this.isloading =false
      })
    })
  }

}
