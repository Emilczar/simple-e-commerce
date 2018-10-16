import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class DataService {

    product: Array<Product>;

  constructor() {
    this.product = [
      {
        id: 0,
        name: 'produkt1',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 1,
        name: 'produkt2',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 2,
        name: 'produkt3',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 3,
        name: 'produkt4',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 4,
        name: 'produkt5',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 5,
        name: 'produkt6',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 6,
        name: 'produkt7',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      },
      {
        id: 7,
        name: 'produkt8',
        price: 100,
        img: 'assets/img/product/product.jpeg',
        stan: false,
        count: 1
      }
    ];
  }

  getSuma(db: Array<any>): number {
    let cena: number;
    let suma: number;
    suma = 0;
      for (let index = 0; index < db.length; index++) {
          cena =  db[index].count * db[index].price;
          suma += cena;
      }
      return suma;
  }
}
