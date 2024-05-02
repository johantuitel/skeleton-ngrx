import { HttpState, initialHttpState } from '../http/http.state';
import { Employee } from './types/employee';
export interface EmployeeState {
    count: number;
    fetch: HttpState<Array<Employee>, unknown>;
    create: HttpState<Employee, unknown>;
    update: HttpState<Employee, unknown>;
    delete: HttpState<string, unknown>;
}

  
export const initialEmployeeState: EmployeeState = {
    count: 0,
    fetch: initialHttpState,
    create: initialHttpState,
    update: initialHttpState,
    delete: initialHttpState,
};