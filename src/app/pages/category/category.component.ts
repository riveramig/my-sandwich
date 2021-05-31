import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from "rxjs/operators"
import { RoutesApp } from 'src/app/enums/routes.enum';
import { Sandwich } from 'src/app/models/sandwich.model';
import { AddSandwich } from 'src/app/store/cart/cart.actions';
import { selectCategories } from 'src/app/store/catgories/category.selector';
import { CategoriesState, Category } from 'src/app/store/catgories/category.state';
import { selectAllSandwiches } from 'src/app/store/sandwich/sandwich.selector';
import { SandwichState } from 'src/app/store/sandwich/sandwich.state';
import { GetSandwiches } from 'src/app/store/sandwich/sandwich.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public allCategories: Category[];
  public currentCategory: Category;
  public products$: Observable<Sandwich[]> = this.sandwichStore.pipe(select(selectAllSandwiches));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<CategoriesState>,
    private sandwichStore: Store<SandwichState>,
    private router: Router
  ) {
    this.store.pipe(select(selectCategories), take(1)).subscribe((categories) => {
      this.allCategories = categories
    })
  }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.queryParams,
      this.store.pipe(select(selectCategories))
    ])
      .subscribe(([queryParams, categories]) => {
        this.currentCategory = categories.find((category) => category.id === queryParams['category'])
        this.getSandwiches(this.currentCategory.id)
      });
  }

  isLinkActive(category): boolean {
    const queryParamsIndex = this.router.url.indexOf('?');
    return queryParamsIndex === -1 ? false : (this.router.url.split('?')[1] === category);
  }

  navigateCategory(category: string) {
    this.router.navigate([RoutesApp.CATEGORY], {
      queryParams: {
        category
      }
    })
  }

  addSandwichToCart(sandwich: Sandwich) {
    console.log(sandwich)
    this.store.dispatch(new AddSandwich(sandwich));
  }

  viewDetail(productCode) {
    this.router.navigate([RoutesApp.PRODUCT, productCode]);
  }

  getSandwiches(code) {
    console.log('getSandwiches();');
    this.sandwichStore.dispatch(new GetSandwiches(code));
  }

}
