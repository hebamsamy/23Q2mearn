import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList:number[];
  CartSubject:BehaviorSubject<number[]>
  constructor() {
    this.cartList= this.getCart()
    this.CartSubject = new BehaviorSubject<number[]>(this.getCart())
   }
addtoCart(newid:number){
  let oldlist = this.getCart()
  oldlist.push(newid)
  this.setCart(oldlist)
  this.CartSubject.next(oldlist)

}

   getCart():number[]{
    //"[2,3,5]" || "[]"
    return JSON.parse(localStorage.getItem("cart")??"[]") 
   }
   setCart(list:number[]){
    localStorage.setItem("cart",JSON.stringify( list))
   }
}
