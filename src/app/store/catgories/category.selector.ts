import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "..";
import { CategoriesState, Category } from "./category.state";

const featureName = 'categories';

export const selectCategoryFeature = createFeatureSelector<AppState,CategoriesState>(featureName);

export const selectCategories:MemoizedSelector<Object,Category[]> = createSelector(selectCategoryFeature,(state)=>state.categories);
