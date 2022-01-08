import { ApiService } from 'src/app/Services/api/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() product: Products;
  constructor() {}

  ngOnInit() {}
}
