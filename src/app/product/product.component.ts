import { DataService } from './../service/data.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../product';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public dane: Array<Product>;
  public koszyk = new Array<Product>();
  public suma: number;

  constructor(private data: DataService) {
    this.dane = data.product;
    this.suma = 0;
   }

  ngOnInit() {

  }
  addProduct(index: number): void {
    // dodanie to tablicy produktu
    this.koszyk.push(this.dane[index]);
    this.dane[index].stan = true;
    this.suma = this.data.getSuma(this.koszyk);
}
eventProduct(product: Product) {
  console.log(`produckt ${product.name}`);
}
}
