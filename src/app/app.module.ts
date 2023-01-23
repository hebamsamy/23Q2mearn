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
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { VendorLayoutComponent } from './vendor-layout/vendor-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardboxDirective } from './directive/cardbox.directive';
import { MoneyPipe } from './pipes/money.pipe';
import { RatingComponent } from './rating/rating.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCom,
    TodoComponent,
    StudentsComponent,
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
    ProductCardComponent
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
