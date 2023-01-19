import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoCom } from './demo/demo.component';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';
import { TextService } from './services/text.service';
import { appRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoCom,
    TodoComponent,
    StudentsComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    // ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [
    // TextService
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
