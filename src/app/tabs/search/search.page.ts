import { element } from 'protractor';
import { ApiService } from 'src/app/Services/api/api.service';
import { Products } from './../../models/products.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  allProducts: Products[] = [];
  products: Products[] = [];
  query: any;
  isLoading: boolean;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.allProducts = this.api.products;
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.products = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.products = await this.allProducts.filter((element) => {
          return element.short_name.includes(this.query);
        });
        this.isLoading = false;
      }, 1000);
    }
  }
}
