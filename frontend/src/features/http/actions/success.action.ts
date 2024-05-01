import {ActionCreator} from '@ngrx/store';
import {TypedAction} from '@ngrx/store/src/models';

export type SuccessAction<T> = ActionCreator<string, (props: any & {payload: T}) => any & {payload: T} & TypedAction<string>>;
