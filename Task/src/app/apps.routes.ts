
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent }from './home/home.component';
import {ProductlistComponent} from './productlist/productlist.component' ;
import { ProductComponent } from './product/product.component';

export const routes: Routes = [{
   path: 'welcome',
   component: HomeComponent,
},
{
   path: 'Productlist',
   component: ProductlistComponent,

},
{
    path : 'items/:product',
    component: ProductComponent
}
// tslint:disable-next-line:semicolon
]
