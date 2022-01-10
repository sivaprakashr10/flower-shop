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
  // @Input() data: Products;
  data: any;
  productId: number;
  allProducts: Products[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
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
}
