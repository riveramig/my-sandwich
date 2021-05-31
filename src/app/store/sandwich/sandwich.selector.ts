import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Sandwich } from "src/app/models/sandwich.model";
import { AppState } from "..";
import { SandwichState } from "./sandwich.state";


const featureName = 'sandwich';

export const selectCategoryFeature = createFeatureSelector<AppState, SandwichState>(featureName);

export const selectAllSandwiches: MemoizedSelector<object, Sandwich[]> = createSelector(selectCategoryFeature, state => state.sandwiches ? state.sandwiches : []);
