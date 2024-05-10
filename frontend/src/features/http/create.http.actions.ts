import {TypedAction} from '@ngrx/store/src/models';
import {ActionCreator, createAction, props} from '@ngrx/store';
import {HttpError} from './http.error.type';
import {createActionPrefix} from './create.action.prefix';
import { Immutable } from './immutable';


export function createHttpForgotActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'forgot');
}

export function createHttpFetchSummaryActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'fetch summary');
}

export function createHttpFetchAllActions<T1, T2>(prefixType: string): [
  ActionCreator<string, () => TypedAction<string>>,
  ActionCreator<string, (props: {payload: Immutable<T2>}) => {payload: Immutable<T2>} & TypedAction<string>>,
  ActionCreator<string, (props: {error: Immutable<HttpError>}) => {error: Immutable<HttpError>} & TypedAction<string>>,
  ActionCreator<string, (props: {payload: Immutable<T2>}) => {payload: Immutable<T2>} & TypedAction<string>>,
] {
  const prefix = createActionPrefix(prefixType, 'fetch all');
  return [
    createAction(prefix``),
    createAction(prefix`Success`, props<Immutable<{payload: T2}>>()),
    createAction(prefix`Error`, props<Immutable<{error: HttpError}>>()),
    createAction(prefix`Clear`, props<Immutable<{payload: T2}>>()),
  ];
}

export function createHttpFetchActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'fetch');
}

export function createHttpPendingActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'pending');
}

export function createHttpUpdatePendingActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'update pending');
}

export function createHttpCreatePendingActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'create pending');
}

export function createHttpProcessActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'process');
}

export function createHttpCreateActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'create');
}

export function createHttpUpdateActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'update');
}

export function createHttpPublishActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'publish');
}

export function createHttpActivateActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'activate');
}

export function createHttpDeactivateActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'deactivate');
}

export function createHttpBlockActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'block');
}

export function createHttpUnblockActions<T1, T2>(prefixType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  return createHttpActions<T1, T2>(prefixType, 'unblock');
}
export function createHttpActions<T1, T2>(prefixType: string, actionType: string): [
  ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{error: HttpError}>) => Immutable<{error: HttpError}> & TypedAction<string>>,
  ActionCreator<string, (props: Immutable<{payload: T2}>) => Immutable<{payload: T2}> & TypedAction<string>>,
] {
  const prefix = createActionPrefix(prefixType, actionType);
  return [
    createAction(prefix``, props<Immutable<{payload: T1}>>()),
    createAction(prefix`Success`, props<Immutable<{payload: T2}>>()),
    createAction(prefix`Error`, props<Immutable<{error: HttpError}>>()),
    createAction(prefix`Clear`, props<Immutable<{payload: T2}>>()),
  ];
}
