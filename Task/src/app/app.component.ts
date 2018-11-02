import { Component,OnInit } from '@angular/core';
import { ItemServices } from './items.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //items: any[];
 //constructor(private itemServices: ItemServices){}


 ngOnInit()
 {
   //this.itemServices.getItemsProduct()
   // .subscribe((data) => {
     // this.items = data;
    //});
 }
}