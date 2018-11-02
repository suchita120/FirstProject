import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../models/items';
import { ActivatedRoute} from '@angular/router';
import { ItemServices} from '../items.services';
// import { ProductServices} from './../product_list.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  _itemServices: any;
  id:number;
  user:string;
  Details:string="Product List Detail";
  product:Products;
  constructor(private _activatedRoute:ActivatedRoute,
  private _route:Router,
  private _ItemServices:ItemServices
  ) {

   }

  ngOnInit() {

    this._activatedRoute.params
           .subscribe((params)=>{
             let id = params['product'];
             this._ItemServices.getPostProduct(id)
             .subscribe((data)=>{
               this.product = data;
               console.log(this.product);
             })

           })

  };
onBack()
{
  this._route.navigate(['/Products']);
}
}

