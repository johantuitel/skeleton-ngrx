import { ActionReducerMap } from '@ngrx/store';

import { createEmployeeReducer } from '../employee/public-api';
import { SkeletonNgrxState } from './skeleton-ngrx.state';

export const FEATURE_STATE_KEY = 'skeleton-ngrx';

export const skeletonNgrxReducer: ActionReducerMap<SkeletonNgrxState, any> = {
  employee: createEmployeeReducer(),
}
