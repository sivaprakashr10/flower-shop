import { ApiService } from './../../Services/api/api.service';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  products: Products[] = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.products = this.api.products;
  }
}
