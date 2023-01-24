import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges,OnDestroy {
  list:IProduct[];
  cartlist:number[]=[];
  mycolor:string='#ff000';
  recivedPrice:number=0
  currentDate=new Date()
  constructor(private prdServ:ProductService,private CartServ:CartService) { 
    this.list =this.prdServ.getall()
    console.log("constructor")
    this.cartlist = this.CartServ.cartList
    this.CartServ.CartSubject.subscribe(data=>{
      this.cartlist = data
    })

  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")

  }

  recivecurruntPrice(p:number){
    console.log(p)
    this.recivedPrice += p
  }


}
