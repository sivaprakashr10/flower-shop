import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/Services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banner: any;
  category: any;
  products: Products[] = [];
  cardOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4,
  };
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: false,
    loop: true,
  };
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.banner = this.api.banners;
    this.category = this.api.categories;
    this.products = this.api.products;
  }
}
