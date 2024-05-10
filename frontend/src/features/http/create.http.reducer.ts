import {ActionCreator, ActionReducer, createReducer, on} from '@ngrx/store';
import {HttpState, initialHttpState} from './http.state';
import {HttpStatus} from './http.status';
import { SuccessAction } from './actions/success.action';
import { ErrorAction } from './actions/error.action';

export function createHttpReducer<T, E>(
  initAction: ActionCreator,
  succesAction: SuccessAction<T>,
  errorAction: ErrorAction<E>,
  clearAction: ActionCreator,
): ActionReducer<HttpState<T, E>> {
  return createReducer(
    initialHttpState,
    on(initAction, (state, action) => {
      return ({
        ...state,
        status: HttpStatus.PENDING,
        data: undefined,
        error: undefined,
      });
    }),
    on(succesAction, (state, action) => {
      return ({
          ...state,
          status: HttpStatus.SUCCESS,
          data: action.payload,
          error: undefined
        });
      }
    ),
    on(errorAction, (state, action) => {
      return ({
        ...state,
        status: HttpStatus.ERROR,
        data: undefined,
        error: action.error
      });
    }),
    on(clearAction, () => initialHttpState),
  );
}
