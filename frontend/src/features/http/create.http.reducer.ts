import {ActionCreator, ActionReducer, createReducer, on} from '@ngrx/store';
import {SuccessAction, ErrorAction} from './actions/public-api';
import {HttpState, initialHttpState} from './http.state';
import {HttpStatus} from './http.status';

export function createHttpReducer<T, E>(
  initAction: ActionCreator,
  succesAction: SuccessAction<T>,
  errorAction: ErrorAction<E>,
  clearAction: ActionCreator,
): ActionReducer<HttpState<T, E>> {
  return createReducer(
    initialHttpState,
    on(initAction, (state, action) => {
      console.log('>>>> action init', action.type);
      return ({
        ...state,
        status: HttpStatus.PENDING,
        data: undefined,
        error: undefined,
      });
    }),
    on(succesAction, (state, action) => {
      console.log('>>>> action success', action.type, action.payload);
      return ({
          ...state,
          status: HttpStatus.SUCCESS,
          data: action.payload,
          error: undefined
        });
      }
    ),
    on(errorAction, (state, action) => {
      console.log('>>>> action error', action.type);
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
