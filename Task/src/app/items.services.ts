import {Injectable} from '@angular/core';
 import {Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/do';
 import 'rxjs/add/operator/catch';
 import {Products} from '../app/models/items';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemServices {
  // CatchError(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
   private url = './assets/Products.json';
  constructor(private http:Http){}

  getItemsProduct():Observable<Products[]>
  {
     return this.http.get(this.url)
                    .map ((res: Response) => res.json())
                    .do((data)=>JSON.stringify(data))
                    .catch(this.CatchError);
                  
  }

  private CatchError(error:Response)
  {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error')

  }
  getPostProduct(id: number): Observable<Products>
  {
     return this.http.get(this.url)
     .map((res: Response) =>
     {
       var productArrayJson = res.json();
       var productEntity:Products = productArrayJson.find((items) =>items.productId==id)
      return productEntity;

     });
     }
 
}