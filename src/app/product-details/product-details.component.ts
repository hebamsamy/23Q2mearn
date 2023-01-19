import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
id:number
current:IProduct|undefined
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private prdserv:ProductService) { 
    console.log(this.route.snapshot.paramMap)
    
    
    this.id =Number( this.route.snapshot.paramMap.get("pid"))
    this.current = this.prdserv.getone(this.id)
  }

  remove(id:number){
    this.prdserv.remove(id);
    // this.router.navigate(['/products']);/////[routerlink]
    this.router.navigateByUrl('/products');/////routerlink
  }

}
