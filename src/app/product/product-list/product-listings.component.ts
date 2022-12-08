import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})

export class ProductListComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit(): void {
    this.products = products
  }

}
