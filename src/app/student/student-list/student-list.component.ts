import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  list:Student[]=[]
  constructor(private stdSrev:StudentService) { }

  ngOnInit(): void {
    this.stdSrev.getAllStudent().subscribe(res=>{
      console.log(res)
      this.list = res.Data
    })
  }

}
