import { HttpState, initialHttpState } from '../../http/http.state';
import { Employee } from '../api/types/employee';

export interface EmployeeState {
    // fetch: HttpState<Array<Employee>, unknown>;
    // create: HttpState<Employee, unknown>;
    // update: HttpState<Employee, unknown>;
    // delete: HttpState<string, unknown>;
  }
  
  export const initialEmployeeState: EmployeeState = {
    // fetch: initialHttpState,
    // create: initialHttpState,
    // update: initialHttpState,
    // delete: initialHttpState,
  };