import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})

export class ProductListComponent implements OnInit {
  products: any;

  constructor(private prouctService: ProductService) { }

  ngOnInit() {
    const productsObservable = this.prouctService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => {
        console.error('something wrong occurred: ' + err)
      }
    )
  }
}
