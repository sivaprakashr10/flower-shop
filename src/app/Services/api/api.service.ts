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
      id: '0',
      title: 'All',
      image: 'assets/imgs/5.jpg',
    },
    {
      id: '1',
      title: 'Category 1',
      image: 'assets/imgs/5.jpg',
    },
    {
      id: '2',
      title: 'Category 2',
      image: 'assets/imgs/6.jpg',
    },
    {
      id: '3',
      title: 'Category 3',
      image: 'assets/imgs/7.jpg',
    },
    {
      id: '4',
      title: 'Category 4',
      image: 'assets/imgs/8.jpg',
    },
    {
      id: '5',
      title: 'Category 5',
      image: 'assets/imgs/9.jpg',
    },
  ];

  products = [
    {
      id: '1',
      category: 'Category 1',
      name: 'Voilets',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '100',
      quantity: '100',
      image: 'assets/imgs/1.jpg',
      short_name: 'voilets',
    },
    {
      id: '2',
      category: 'Category 1',
      name: 'Sun Flower',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '200',
      quantity: '200',
      image: 'assets/imgs/3.jpg',
      short_name: 'sunflower',
    },
    {
      id: '3',
      category: 'Category 2',
      name: 'jasmine',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '100',
      quantity: '100',
      image: 'assets/imgs/15.jpg',
      short_name: 'jasmine',
    },
    {
      id: '4',
      category: 'Category 2',
      name: 'Poo Maalai',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '100',
      quantity: '100',
      image: 'assets/imgs/14.jpg',
      short_name: 'poomaalai',
    },
    {
      id: '5',
      category: 'Category 3',
      name: 'Wedding',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '100',
      quantity: '100',
      image: 'assets/imgs/12.jpg',
      short_name: 'wedding',
    },
    {
      id: '6',
      category: 'Category 3',
      name: 'Thulasi Maalai',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
      harum?`,
      price: '100',
      quantity: '100',
      image: 'assets/imgs/13.jpg',
      short_name: 'thulasimaalai',
    },
  ];
  constructor() {}
}
