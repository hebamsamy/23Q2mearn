import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoCom } from "./demo/demo.component";
import { LoginComponent } from "./login/login.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";
import { StudentsComponent } from "./students/students.component";
import { TodoComponent } from "./todo/todo.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
import { VendorLayoutComponent } from "./vendor-layout/vendor-layout.component";

let myroutes:Routes=[
    {path:"",redirectTo:"/user/demo",pathMatch:"full"},
    {path:"user",component:UserLayoutComponent,children:[
        {path:"",redirectTo:"/user/demo",pathMatch:"full"},
        {path:'demo',component:DemoCom} ,
        {path:'products',component:ProductsComponent} ,
        {path:'products/:pid',component:ProductDetailsComponent} ,
    ]},
    {path:"vendor",component:VendorLayoutComponent,children:[
        {path:"",redirectTo:"/vendor/todo",pathMatch:"full"},
        {path:'todo',component:TodoComponent} ,
        {path:'students',component:StudentsComponent} ,
    ]},
   {path:'login',component:LoginComponent} ,
   {path:'register',component:RegisterComponent} ,
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