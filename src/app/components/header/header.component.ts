import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { selectNumberAllSandwichesInCart } from 'src/app/store/cart/cart.selector';
import { CartState } from 'src/app/store/cart/cart.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  langActual: String = 'es-co';
  public currentCartItems$:Observable<number> = this.store.pipe(select(selectNumberAllSandwichesInCart))

  constructor(
    public translate: TranslateService,
    private store: Store<CartState>
  ) {
    translate.addLangs(["es-co", "en"]);
    translate.setDefaultLang('es-co');
    translate.use('es-co');
  }

  ngOnInit(): void {
  }

}
