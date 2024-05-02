import { ActionReducerMap, createReducer } from '@ngrx/store';

import { SkeletonNgrxState } from './skeleton-ngrx.state';
import { createEmployeeReducer } from '../employee/store/employee.reducer';

export const FEATURE_STATE_KEY = 'skeleton-ngrx';

export const skeletonNgrxReducer: ActionReducerMap<SkeletonNgrxState, any> = {
  employee: createEmployeeReducer()
}
