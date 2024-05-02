import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  createEmployee,
  createEmployeeClear,
  createEmployeeError,
  createEmployeeSuccess,
  deleteEmployee,
  deleteEmployeeClear,
  deleteEmployeeError,
  deleteEmployeeSuccess,
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSuccess,
  updateEmployee,
  updateEmployeeClear,
  updateEmployeeError,
  updateEmployeeSuccess,
} from './employee.actions';
import { HttpError } from '../http/http.error.type';
import { EmployeeService } from './services/employees-service';
import { Employee } from './api/employee';

@Injectable()
export class EmployeeEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly employeeService: EmployeeService
  ) {}

  fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployees),
      switchMap((action) => {
        return this.employeeService.fetchAllEmployees().pipe(
          map((payload: Array<Employee>) => fetchEmployeesSuccess({ payload })),
          catchError((error: HttpError) => of(fetchEmployeesError({ error })))
        );
      })
    )
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployee),
      switchMap((action) => {
        return from(this.employeeService.createEmployee(action.payload)).pipe(
          map((payload) =>
            createEmployeeSuccess({
              payload: {
                id: 0,
                name: '',
                department: '',
                position: '',
                salary: 0,
              },
            })
          ),
          catchError((error: HttpError) => of(createEmployeeError({ error })))
        );
      })
    )
  );

  createEmployeeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeSuccess),
      map((action) => createEmployeeClear({ payload: action.payload }))
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap((action) => {
        return from(this.employeeService.updateEmployee(action.payload)).pipe(
          map((payload) =>
            updateEmployeeSuccess({
              payload: {
                id: 0,
                name: '',
                department: '',
                position: '',
                salary: 0,
              },
            })
          ),
          catchError((error: HttpError) => of(updateEmployeeError({ error })))
        );
      })
    )
  );

  updateEmployeeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployeeSuccess),
      map((action) => updateEmployeeClear({ payload: action.payload }))
    )
  );

  //   iamRoleClear$ = createEffect(() => this.actions$.pipe(
  //     ofType(createEmployeeClear, updateEmployeeClear),
  //     map((action) => iamRoleSelected({payload: action.payload}))
  //   ));

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap((action) => {
        return from(this.employeeService.deleteEmployee(action.id)).pipe(
          map(() => deleteEmployeeSuccess()),
          catchError((error: HttpError) => of(deleteEmployeeError({ error })))
        );
      })
    )
  );

  deleteEmployeeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployeeSuccess),
      map((action) => deleteEmployeeClear())
    )
  );
}
