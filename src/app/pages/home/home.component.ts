import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { RoutesApp } from 'src/app/enums/routes.enum';
import { selectCategories } from '../../store/catgories/category.selector';
import { CategoriesState, Category } from '../../store/catgories/category.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories: Category[] = []

  constructor(private router:Router, private store:Store<CategoriesState>) {
    this.store.pipe(select(selectCategories),take(1)).subscribe((categories)=>{
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  navigateCategory(category:string) {
    this.router.navigate([RoutesApp.CATEGORY],{
      queryParams:{
        category
      }
    })
  }

}
