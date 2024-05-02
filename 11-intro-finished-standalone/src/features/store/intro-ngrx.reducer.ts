import { ActionReducerMap, createReducer } from '@ngrx/store';

import { IntroNgrxState } from './intro-ngrx.state';
import { createEmployeeReducer } from '../employee/employee.reducer';

export const FEATURE_STATE_KEY = 'intro-ngrx';

export const introNgrxReducer: ActionReducerMap<IntroNgrxState, any> = {
  employee: createEmployeeReducer()
}
