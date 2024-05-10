import { ActionCreator, ActionReducer, createReducer, on } from '@ngrx/store';
import { SuccessAction } from './actions/success.action';
import { ItemState, initialItemState } from './item.state';
import { ItemStatus } from './item.status';

export function createItemReducer<T>(
  initAction: ActionCreator,
  succesAction: SuccessAction<T>,
  clearAction: ActionCreator,
): ActionReducer<ItemState<T>> {
  return createReducer(
    initialItemState,
    on(initAction, state => ({
      ...state,
      status: ItemStatus.PENDING,
      data: undefined,
    })),
    on(succesAction, (state, action) => {
      return ({
          ...state,
          status: ItemStatus.SUCCESS,
          data: action.payload,
        });
      }
    ),
    on(clearAction, () => initialItemState),
  );
}
