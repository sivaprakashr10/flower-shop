import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  model: any = {
    icon: 'cart-outline',
    title: 'Your cart is empty',
  };
  count: number = 1;
  constructor() {}

  ngOnInit() {}

  quantityPlus() {
    this.count += 1;
  }
  quantityMinus() {
    this.count -= 1;
  }
}
