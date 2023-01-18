import { Component } from "@angular/core";

@Component(
    {
        selector:"home",
        // template:`<h1>Demo </h1>`,
        templateUrl:"./demo.component.html",
        styleUrls:["./demo.component.css"]
    }
)
export class DemoCom{
    username:string="Walaa";
    branch:string= "Aswan";
    age:number = 20
    change(e:string){
        console.log(e)
        this.username= e
        // this.username = e.target.value;
    }
}