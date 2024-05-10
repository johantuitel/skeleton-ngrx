import { ItemStatus } from "./item.status";

export type ItemState<T> = {
  status: ItemStatus,
  data?: T
};

export const initialItemState: ItemState<any> = {
  status: ItemStatus.IDLE,
};