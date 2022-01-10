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
      image: 'assets/imgs/5.jpg',
    },
    {
      title: 'Category 2',
      image: 'assets/imgs/6.jpg',
    },
    {
      title: 'Category 3',
      image: 'assets/imgs/7.jpg',
    },
    {
      title: 'Category 4',
      image: 'assets/imgs/8.jpg',
    },
    {
      title: 'Category 5',
      image: 'assets/imgs/9.jpg',
    },
  ];

  products = [
    {
      id: '1',
      category: 'Categorey A',
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
      category: 'Categorey A',
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
      category: 'Categorey B',
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
      category: 'Categorey B',
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
      category: 'Categorey C',
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
      category: 'Categorey C',
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
