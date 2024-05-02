import { ActionReducerMap, createReducer } from '@ngrx/store';

import { IntroNgrxState } from './intro-ngrx.state';
import { counterReducer } from '../counter/counter.reducer';
import { createEmployeeReducer } from '../employee/employee.reducer';

export const FEATURE_STATE_KEY = 'intro-ngrx';

export const introNgrxReducer: ActionReducerMap<IntroNgrxState, any> = {
  counter: counterReducer,
  employee: createEmployeeReducer()
}
