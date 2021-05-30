import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Sandwich } from 'src/app/models/sandwich.model';
import { ProductService } from 'src/app/services/product/product.service';
import { AddSandwich } from 'src/app/store/cart/cart.actions';
import { CategoriesState } from 'src/app/store/catgories/category.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public code: number;
  private sub: any;
  public product: Sandwich;
  public discount: number = 0;
  public ingredients: any = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<CategoriesState>,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = +params['code'];
      this.getProductDetail();
    });
  }

  getProductDetail() {
    this.productService.getProduct(this.code).subscribe(
      product => {
        this.product = product;
        const { discount, price, ingredients } = product;
        this.discount = discount > 0 ? price - (price * (discount / 100)) : 0;
        this.ingredients = ingredients;
      });
  }

  addProduct(product: Sandwich) {
    this.store.dispatch(new AddSandwich(product));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
