import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-listings.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductDetailComponent }
    ]
 },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
