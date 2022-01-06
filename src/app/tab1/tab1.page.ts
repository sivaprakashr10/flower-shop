import { ApiService } from './../Services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  banner: any;
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
  }
}
