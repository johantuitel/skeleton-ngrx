import { ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { createActionPrefix } from './create.action.prefix';
import { Immutable } from './immutable';

export function createSelectItemActions<T1>(prefixType: string): [
    ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
    ActionCreator<string, (props: Immutable<{payload: T1}>) => Immutable<{payload: T1}> & TypedAction<string>>,
    ActionCreator<string, () => TypedAction<string>>,
  ] {
    const prefix = createActionPrefix(prefixType, 'select');
    return [
      createAction(prefix``, props<Immutable<{payload: T1}>>()),
      createAction(prefix`Success`, props<Immutable<{payload: T1}>>()),
      createAction(prefix`clear`),
    ];
  }
