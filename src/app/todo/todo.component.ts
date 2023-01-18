import { Component, OnInit } from '@angular/core';
import { IToDoItem, ToDoItem } from '../models/todoItem';

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
  //  list:ToDoItem[]=[];
 add(){
  // let item = new ToDoItem(this.text,false,new Date())
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

