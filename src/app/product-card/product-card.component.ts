import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item:IProduct;
  @Output() buyitem:EventEmitter<number>;
// age:number
  constructor() {
    // this.age=20
    this.buyitem = new EventEmitter<number>;
    this.item = {name:"",price:0,quantity:0,rate:0,id:0,imgURL:"",categoryID:0}
   }

  ngOnInit(): void {
  }
  buy(price:number){
    //send value
    this.buyitem.emit(price)
  }

}
