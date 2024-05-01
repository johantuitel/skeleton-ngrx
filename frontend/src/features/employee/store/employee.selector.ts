import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_STATE_KEY } from "../../store/skeleton-ngrx.reducer";
import { SkeletonNgrxState } from "../../store/skeleton-ngrx.state";


export const skeletonNgrxState = createFeatureSelector<SkeletonNgrxState>(FEATURE_STATE_KEY);
export const employeeState = createSelector(skeletonNgrxState, state => state.employee);

export const fetchState = createSelector(employeeState, state => state.fetch);
export const fetchData = createSelector(fetchState, state => state.data);
export const fetchStatus = createSelector(fetchState, state => state.status);
export const fetchError = createSelector(fetchState, state => state.error);

export const createState = createSelector(employeeState, state => state.create);
export const createStatus = createSelector(createState, state => state.status);
export const createError = createSelector(createState, state => state.error);

export const updateState = createSelector(employeeState, state => state.update);
export const updateStatus = createSelector(updateState, state => state.status);
export const updateError = createSelector(updateState, state => state.error);

export const deleteState = createSelector(employeeState, state => state.delete);
export const deleteData = createSelector(deleteState, state => state.data);
export const deleteStatus = createSelector(deleteState, state => state.status);
export const deleteError = createSelector(deleteState, state => state.error);
