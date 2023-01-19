import { Component, OnInit } from '@angular/core';
import { IToDoItem, ToDoItem } from '../models/todoItem';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  text:string="";
  tasks:IToDoItem[]=[{
    info:"bye",
    isDone:true,
    Date:new Date()
  },
  {
    info:"hi",
    isDone:true,
    Date:new Date()
  }];
  // serv:TextService;
  constructor(private serv:TextService ){
    // this.serv = new TextService()
    console.log(TextService.count)
  }
 add(){
 if(this.serv.isemptyText(this.text))
 {
    alert("can not add empty todo")
 }
  let item :IToDoItem ={
    info:this.text,
    isDone:false,
    Date:new Date()
  }
  this.tasks.push(item)

 }

}

//  class ToDoItem{
//   constructor(public text:string){}
// }

