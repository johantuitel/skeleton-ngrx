import {TypedAction} from '@ngrx/store/src/models';
import {ActionCreator, createAction, props} from '@ngrx/store';
import {HttpError} from './http.error.type';
import {createActionPrefix} from './create.action.prefix';
import { Immutable } from './immutable';

export function createHttpDeleteActions<T>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{id: T}>) => Immutable<{id: T}> & TypedAction<string>>,
  ActionCreator<string, () => TypedAction<string>>,
  ActionCreator<string, (props: {error: HttpError}) => {error: HttpError} & TypedAction<string>>,
  ActionCreator<string, () => TypedAction<string>>,
] {
  const prefix = createActionPrefix(prefixType, 'delete');
  return [
    createAction(prefix``, props<Immutable<{ id: T }>>()),
    createAction(prefix`success`),
    createAction(prefix`error`, props<{error: HttpError}>()),
    createAction(prefix`clear`),
  ];
}
