import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { DataService } from './service/data.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
