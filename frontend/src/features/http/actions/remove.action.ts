import {ActionCreator} from '@ngrx/store';
import {TypedAction} from '@ngrx/store/src/models';

export type RemoveAction<T> = ActionCreator<string, (props: any & {id: string}) => any & {id: string} & TypedAction<string>>;
