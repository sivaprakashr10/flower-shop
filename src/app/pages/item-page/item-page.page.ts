import { CartService } from './../../Services/cart/cart.service';
import { GlobalService } from './../../Services/global/global.service';
import { element } from 'protractor';
import { ApiService } from 'src/app/Services/api/api.service';
import { Products } from 'src/app/models/products.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.page.html',
  styleUrls: ['./item-page.page.scss'],
})
export class ItemPagePage implements OnInit {
  data: any;
  productId: number;
  allProducts: Products[] = [];
  isLoading: boolean = true;
  count: number = 1;
  model: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private global: GlobalService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.productId);
    this.allProducts = this.api.products;
    this.getData();
  }

  getData() {
    if (this.productId) {
      this.data = this.allProducts.filter((element: any) => {
        return element.id == this.productId;
      });
      console.log(this.data);
    }
  }

  onAdd() {
    this.isLoading = false;
  }

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
