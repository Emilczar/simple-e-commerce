import {
  DataService
} from './../service/data.service';
import {
  Component,
  OnInit,
  Input,

} from '@angular/core';

import {
  Product
} from '../product';
import {
  Basket
} from '../basket';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() products: Array < Product > ;
  @Input() suma: number;
  // @Output() eventProducts = new EventEmitter < Product > ();
  public stan: string;
  public buttonCheck = {
    name: 'Rozwin koszyk',
    stan: true
  };

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.suma = this.data.getSuma(this.products);
  }

  plusStan(index: number) {
    this.products[index].count++;
    this.suma = this.data.getSuma(this.products);
  }
  minusStan(index: number) {

    if (this.products[index].count <= 1) {
      this.products[index].stan = false;
      //  const product: Product = this.products[index];
      this.products.splice(index, 1);
      this.suma = this.data.getSuma(this.products);
      if (this.products.length === 0) {
        this.stan = 'Your cart is empty';
        this.buttonCheck.name = 'Rozwin koszyk';
        this.buttonCheck.stan = true; // hide
        setTimeout(() => {
          this.stan = '';
        }, 1000);
      }
    } else {
      this.products[index].count--;
      this.suma = this.data.getSuma(this.products);
    }
  }

  checkProducts() {
    if (this.products.length === 0) {
      console.log('1');
      this.stan = 'Your cart is empty';
      this.buttonCheck.name = 'Rozwin koszyk';
      setTimeout(() => {
        this.stan = '';
      }, 1000);
    } else if (this.products.length !== 0 && this.buttonCheck.stan === true) {
      console.log('2');
      this.buttonCheck.name = 'Ukryj koszyk';
      this.buttonCheck.stan = false; // show
    } else if (this.products.length !== 0 && this.buttonCheck.stan === false) {
      console.log('3');
      this.buttonCheck.name = 'Rozwin koszyk';
      this.buttonCheck.stan = true; // hide
    }
  }
  getSuma() {
    let cena: number;
    this.suma = 0;
    for (let index = 0; index < this.products.length; index++) {
      cena = this.products[index].count * this.products[index].price;
      this.suma += cena;
    }
  }
}
