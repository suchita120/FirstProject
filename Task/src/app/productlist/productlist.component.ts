import { Component, OnInit } from '@angular/core';
import {ItemServices} from '../items.services';
import {Products} from '../models/items';
import { SearchFilterPipe} from '../custom.pipe';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']

  
})
export class ProductlistComponent implements OnInit {
  items: any;
 constructor(private itemServices: ItemServices){}
 ngOnInit()
 {
   this.itemServices.getItemsProduct()
    .subscribe((data) => {
      this.items = data;
      console.log(this.items);
    });
 }
 show: boolean = false;
  clicked() {

      //alert("test");

      this.show = !this.show;
      //alert("test");
  }
}



