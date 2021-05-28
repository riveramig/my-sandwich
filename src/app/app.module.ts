import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Action, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reduceProvider, REDUCERS_TOKEN } from './store';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentConfirmationComponent } from './pages/payment-confirmation/payment-confirmation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const metaReducers: MetaReducer<Object, Action>[] = []

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginBoxComponent,
    ShoppingCartComponent,
    SearchBoxComponent,
    CategoryComponent,
    ProductDetailComponent,
    CheckoutComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(REDUCERS_TOKEN, { metaReducers }),
    !environment.production && StoreDevtoolsModule.instrument(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [reduceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['es-co', 'en']);
    translate.setDefaultLang('es-co');
    translate.use('es-co');
  }
}
