import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutesApp } from './enums/routes.enum';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: RoutesApp.HOME, component: HomeComponent },
  { path: RoutesApp.CATEGORY, component: CategoryComponent },
  { path: `${RoutesApp.PRODUCT}:code`, component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
