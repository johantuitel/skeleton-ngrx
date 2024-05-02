import { Action, ActionReducer, combineReducers } from '@ngrx/store';

import {
  fetchEmployees,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  fetchEmployeesClear,
  createEmployee,
  createEmployeeSuccess,
  createEmployeeError,
  createEmployeeClear,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeError,
  updateEmployeeClear,
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  deleteEmployeeClear
} from '../../employee/store/employee.actions';
import { createHttpReducer } from '../../http/create.http.reducer';
import { Employee } from '../api/types/employee';
import { EmployeeState } from './employee.state';

const fetchReducer = createHttpReducer<Array<Employee>, unknown>(
  fetchEmployees,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  fetchEmployeesClear
);
const createReducer = createHttpReducer<Employee, unknown>(
  createEmployee,
  createEmployeeSuccess,
  createEmployeeError,
  createEmployeeClear
);
const updateReducer = createHttpReducer<Employee, unknown>(
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeError,
  updateEmployeeClear
);
const deleteReducer = createHttpReducer<string, unknown>(
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeError,
  deleteEmployeeClear
);

const employeeReducer = combineReducers<EmployeeState>({
  // fetch: fetchReducer,
  // create: createReducer,
  // update: updateReducer,
  // delete: deleteReducer,
});

export function createEmployeeReducer(): ActionReducer<EmployeeState, Action> {
  return employeeReducer;
}
