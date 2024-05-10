import { ItemState, initialItemState } from 'src/features/http/item.state';
import { HttpState, initialHttpState } from '../../http/http.state';
import { Employee } from '../api/employee';

export interface EmployeeState {
    fetch: HttpState<Array<Employee>, unknown>;
    select: ItemState<Employee>;
    create: HttpState<Employee, unknown>;
    update: HttpState<Employee, unknown>;
    delete: HttpState<string, unknown>;
}
  
export const initialEmployeeState: EmployeeState = {
    fetch: initialHttpState,
    select: initialItemState,
    create: initialHttpState,
    update: initialHttpState,
    delete: initialHttpState,
};