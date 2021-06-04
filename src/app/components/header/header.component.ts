import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { RoutesApp } from 'src/app/enums/routes.enum';
import { GetOrders } from 'src/app/store/cart/cart.actions';
import { selectNumberAllSandwichesInCart } from 'src/app/store/cart/cart.selector';
import { CartState } from 'src/app/store/cart/cart.state';
import { CategoriesEnum } from "src/app/enums/categories.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  langActual: String = 'es-co';
  public currentCartItems$: Observable<number> = this.store.pipe(select(selectNumberAllSandwichesInCart))

  constructor(
    public translate: TranslateService,
    private cartStore: Store<CartState>,
    private store: Store<CartState>,
    private router: Router
  ) {
    translate.addLangs(["es-co", "en"]);
    translate.setDefaultLang('es-co');
    translate.use('es-co');
  }

  ngOnInit(): void {
  }

  getOrders() {
    this.cartStore.dispatch(new GetOrders());
  }

  goToProducts() {
    this.router.navigate([RoutesApp.CATEGORY], {
      queryParams: {
        category: CategoriesEnum.sandwiches
      }
    })
  }

}
