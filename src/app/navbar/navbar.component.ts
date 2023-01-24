import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean 
  cart:number []
  constructor(public authServ:AuthService,public cartServ:CartService) {
    this.isLogged = authServ.isAuthrized; 
    this.cart =  cartServ.cartList
    this.authServ.loggedSubject.subscribe(status=>{
      this.isLogged = status
    } 
    )
    this.cartServ.CartSubject.subscribe({
      next:data=>{
        this.cart = data
      } ,

    }
    )
   }

  ngOnInit(): void {
  }
  logout(){
    this.authServ.logout()
  }

}
