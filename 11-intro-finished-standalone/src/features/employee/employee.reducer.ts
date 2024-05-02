import { Action, createReducer, on } from '@ngrx/store';

import { decrement, increment, set } from './employee.actions';
import { initialEmployeeState } from './employee.state';


export const employeeReducer = createReducer(
  initialEmployeeState,
  on(increment, (state, action) => {
    return {...state, count: state.count + action.value}
  }),
  on(decrement, (state, action) => {
    return {...state, count: state.count - action.value}
  }),
  on(set, (state, action) => {
    return {...state, count: action.value}
  }),
);
