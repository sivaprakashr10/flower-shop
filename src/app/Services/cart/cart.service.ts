import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  count: number = 1;
  constructor() {}

  quantityPlus(data, index) {
    console.log(data, index);
    if (data) {
      this.count += 1;
    }
  }

  quantityMinus(data, index) {
    console.log(data, index);
    if (data) {
      this.count -= 1;
    }
  }
}
