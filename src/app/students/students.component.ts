import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  List:Student[]=[
    {
      name:"heba",
      age:22,
      level:1
    },
    {
      name:"wallaa",
      age:22,
      level:2
    },
    {
      name:"lololo",
      age:22,
      level:4
    },
    {
      name:"lllllll",
      age:22,
      level:3
    },
  ]
  text:string = ""
  // serv:TextService;
  constructor(public serv:TextService) { 
    // this.serv = new TextService()
    console.log(TextService.count)
  }
  check(){

    if(this.serv.isemptyText(this.text))
      alert("must enter a value")
      
  }
  ngOnInit(): void {
  }

}
