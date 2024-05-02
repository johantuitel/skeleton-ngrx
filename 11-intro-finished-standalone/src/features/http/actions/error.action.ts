import {ActionCreator} from '@ngrx/store';
import {HttpError} from '../http.error.type';
import {TypedAction} from '@ngrx/store/src/models';

export type ErrorAction<E> = ActionCreator<string, (props: any & {error: HttpError<E>}) => any & {error: HttpError<E>} & TypedAction<string>>;
