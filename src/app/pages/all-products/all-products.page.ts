import { ApiService } from './../../Services/api/api.service';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  urlCheck: any;
  url: any;
  products: Products[] = [];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.products = this.api.products;
  }
}
