import { Action, createReducer, on } from '@ngrx/store';

// import { CounterActions, INCREMENT, IncrementAction } from './counter.actions';
import { decrement, increment, set } from './counter.actions';
import { initialCounterState } from './counter.state';


export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state, action) => {
    return {count: state.count + action.value}
  }),
  on(decrement, (state, action) => {
    return {count: state.count - action.value}
  }),
  on(set, (state, action) => {
    return {count: action.value}
  }),
);
