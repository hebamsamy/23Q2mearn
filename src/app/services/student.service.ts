import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AddtionStudent, ApiResult, Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAllStudent():Observable<ApiResult<Student[]>>{
    //https://api.mohamed-sadek.com/student/get

    return this.http.get<ApiResult<Student[]>>("https://api.mohamed-sadek.com/student/get")

  }
  getOneStudentById(id:number):Observable<ApiResult<Student>>{
    //https://api.mohamed-sadek.com/Student/GetByID?id=709

    return this.http.get<ApiResult<Student>>(`https://api.mohamed-sadek.com/student/GetByID?id=${id}`)
  }
  addStudent(std:AddtionStudent):Observable<ApiResult<boolean>>{
    return this.http.post<ApiResult<boolean>>("https://api.mohamed-sadek.com/Student/post",std)
  }
}
