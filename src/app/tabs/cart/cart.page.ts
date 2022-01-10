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
  constructor() {}

  ngOnInit() {}
}
