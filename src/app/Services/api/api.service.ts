import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  banners = [
    { banner: 'assets/imgs/1.jpg' },
    { banner: 'assets/imgs/2.jpg' },
    { banner: 'assets/imgs/3.jpg' },
  ];

  categories = [
    {
      title: 'Category 1',
      img: 'assets/imgs/5.jpg',
    },
    {
      title: 'Category 2',
      img: 'assets/imgs/6.jpg',
    },
    {
      title: 'Category 3',
      img: 'assets/imgs/7.jpg',
    },
    {
      title: 'Category 4',
      img: 'assets/imgs/8.jpg',
    },
    {
      title: 'Category 5',
      img: 'assets/imgs/9.jpg',
    },
  ];

  products = [
    {
      name: 'Voilets',
      price: '100',
      quantity: '100',
      img: 'assets/imgs/1.jpg',
    },
    {
      name: 'Sun Flower',
      price: '200',
      quantity: '200',
      img: 'assets/imgs/3.jpg',
    },
    {
      name: 'jasmine',
      price: '100',
      quantity: '100',
      img: 'assets/imgs/15.jpg',
    },
    {
      name: 'Poo Maalai',
      price: '100',
      quantity: '100',
      img: 'assets/imgs/14.jpg',
    },
    {
      name: 'Wedding',
      price: '100',
      quantity: '100',
      img: 'assets/imgs/12.jpg',
    },
    {
      name: 'Thulasi Maalai',
      price: '100',
      quantity: '100',
      img: 'assets/imgs/13.jpg',
    },
  ];
  constructor() {}
}
