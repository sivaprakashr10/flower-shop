import { ApiService } from './../../Services/api/api.service';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/categories.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  urlCheck: any;
  url: any;
  products: Products[] = [];
  categories: Categories[] = [];
  slideOpts = { initialSlide: 0, speed: 400, slidesPerView: 3.2 };
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.products = this.api.products;
    this.categories = this.api.categories;
  }

  filterCategory(category) {
    this.products = [];
    if (category.id === '0') {
      this.products = this.api.products;
    } else {
      this.products = this.api.products.filter((x) => {
        return x.category == category.title;
      });
    }
  }
}
