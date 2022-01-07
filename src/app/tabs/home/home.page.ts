import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banner: any;
  category: any;
  products: any;
  cardOpts = {
    initialSlide: 0,
    speed: 400,
    width: 120,
  };
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true,
  };
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.banner = this.api.banners;
    this.category = this.api.categories;
    this.products = this.api.products;
  }
}
