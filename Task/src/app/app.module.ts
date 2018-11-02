import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import{ProductlistComponent} from './productlist/productlist.component';
import{ HttpModule } from '@angular/http';
import {routes} from './apps.routes';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ItemServices } from './items.services';
import { SearchFilterPipe } from './custom.pipe';
import {FormsModule } from '@angular/forms';
import{RatingComponent} from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { ProductServices} from './product_list.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductlistComponent,
    SearchFilterPipe,
    RatingComponent,
    ProductComponent
  
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
    
    
  ],
  providers: [ItemServices,ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
