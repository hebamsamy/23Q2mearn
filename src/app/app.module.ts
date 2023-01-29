import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DemoCom } from './demo/demo.component';
import { TodoComponent } from './todo/todo.component';

import { appRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { VendorLayoutComponent } from './vendor-layout/vendor-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardboxDirective } from './directive/cardbox.directive';
import { MoneyPipe } from './pipes/money.pipe';
import { RatingComponent } from './rating/rating.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { LoaderComponent } from './loader/loader.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCom,
    TodoComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    UserLayoutComponent,
    VendorLayoutComponent,
    LoginComponent,
    RegisterComponent,
    CardboxDirective,
    MoneyPipe,
    RatingComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    StudentListComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    LoaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // TextService
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
