import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  list:IProduct[];
  constructor(private prdServ:ProductService,) { 
    this.list =this.prdServ.getall()
  }


}
