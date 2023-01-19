import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoCom } from "./demo/demo.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { StudentsComponent } from "./students/students.component";
import { TodoComponent } from "./todo/todo.component";

let myroutes:Routes=[
    {path:"",redirectTo:"/demo",pathMatch:"full"},
   {path:'todo',component:TodoComponent} ,
   {path:'students',component:StudentsComponent} ,
   {path:'demo',component:DemoCom} ,
   {path:'products',component:ProductsComponent} ,
   {path:'products/:pid',component:ProductDetailsComponent} ,
   {path:'**',component:NotfoundComponent} ,

]
@NgModule(
    {
        imports: [
            RouterModule.forRoot(myroutes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class appRoutingModule {

}