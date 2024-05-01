import { HttpError } from "./http.error.type";
import { HttpStatus } from "./http.status";

export type HttpState<T, E> = {
  status: HttpStatus,
  data?: T,
  error?: HttpError<E>,
};

export const initialHttpState: HttpState<any, any> = {
  status: HttpStatus.IDLE,
};