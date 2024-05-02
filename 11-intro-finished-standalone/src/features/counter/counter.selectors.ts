import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IntroNgrxState } from "../store/intro-ngrx.state";
import { FEATURE_STATE_KEY } from "../store/intro-ngrx.reducer";


export const introNgrxState = createFeatureSelector<IntroNgrxState>(FEATURE_STATE_KEY);
export const counterState = createSelector(introNgrxState, state => state.counter);

export const selectCount = createSelector(counterState, state => state.count);
export const selectCountDouble = createSelector(counterState, state => state.count * 2);
