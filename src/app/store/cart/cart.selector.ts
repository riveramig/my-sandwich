import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Sandwich } from "src/app/models/sandwich.model";
import { AppState } from "..";
import { CartItem, CartState } from "./cart.state";


const featureName = 'cart';

export const selectCartFeature = createFeatureSelector<AppState,CartState>(featureName);

export const selectAllSandwichesInCart:MemoizedSelector<object,CartItem[]> = createSelector(selectCartFeature,(state)=>state.items);

export const selectNumberAllSandwichesInCart:MemoizedSelector<object,number> = createSelector(selectCartFeature, (state) => state.items.reduce((prev:number,curr:CartItem)=>{ return prev=prev+curr.quantity},0));

export const selectCurrentTotalInCart:MemoizedSelector<object,number> = createSelector(selectCartFeature, (state) => state.items.map((item)=>item.quantity * item.sandwich.price).reduce((prev,curr)=>{return prev = prev +curr},0));
