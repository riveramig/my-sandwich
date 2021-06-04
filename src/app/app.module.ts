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
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentConfirmationComponent } from './pages/payment-confirmation/payment-confirmation.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product/product.service';
import { HttpXsrfInterceptor } from './utils/interceptors/XhrInterceptor';
import { EffectsModule } from '@ngrx/effects';
import { SandwichEffects } from './store/sandwich/sandwich.effects';
import { DiscountPipe } from './pipes/discount.pipe';
import { CartEffects } from './store/cart/cart.effects';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';

import localeEsCo from '@angular/common/locales/es-CO';
import { Services } from './services/services.service';

const metaReducers: MetaReducer<Object, Action>[] = []

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

registerLocaleData(localeEsCo);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginBoxComponent,
    ShoppingCartComponent,
    OrdersComponent,
    CategoryComponent,
    ProductDetailComponent,
    CheckoutComponent,
    PaymentConfirmationComponent,
    DiscountPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
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
    EffectsModule.forRoot([SandwichEffects, CartEffects]),
  ],
  providers: [
    ProductService,
    HttpXsrfInterceptor,
    Services,
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true },
    reduceProvider
  ],
  exports: [
    DiscountPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['es-co', 'en']);
    translate.setDefaultLang('es-co');
    translate.use('es-co');
  }
}
