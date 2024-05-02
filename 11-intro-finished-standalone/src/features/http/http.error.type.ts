export type HttpError<T = any> = {
  status: number,
  message: string,
  error?: T,
  headers: {
    // @ts-ignore
    [key: string], string,
  }
};
