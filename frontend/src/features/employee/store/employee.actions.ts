import { createHttpCreateActions, createHttpUpdateActions, createHttpFetchAllActions } from '../../http/create.http.actions';
import { createHttpDeleteActions } from "../../http/create.http.delete.actions";
import { Employee } from "../api/types/employee";

const ACTION_PREFIX = 'Employee';
export const [fetchEmployees, fetchEmployeesSuccess, fetchEmployeesError, fetchEmployeesClear] = createHttpFetchAllActions<string, Array<Employee>>(ACTION_PREFIX);
export const [createEmployee, createEmployeeSuccess, createEmployeeError, createEmployeeClear] = createHttpCreateActions<Employee, Employee>(ACTION_PREFIX);
export const [updateEmployee, updateEmployeeSuccess, updateEmployeeError, updateEmployeeClear] = createHttpUpdateActions<Employee, Employee>(ACTION_PREFIX);
export const [deleteEmployee, deleteEmployeeSuccess, deleteEmployeeError, deleteEmployeeClear] = createHttpDeleteActions<string>(ACTION_PREFIX);