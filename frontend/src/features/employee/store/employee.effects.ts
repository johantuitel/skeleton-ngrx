import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSuccess,
  selectEmployee,
  selectEmployeeSuccess,
  selectEmployeeClear,
  createEmployee,
  createEmployeeClear,
  createEmployeeError,
  createEmployeeSuccess,
  deleteEmployee,
  deleteEmployeeClear,
  deleteEmployeeError,
  deleteEmployeeSuccess,
  updateEmployee,
  updateEmployeeClear,
  updateEmployeeError,
  updateEmployeeSuccess,
} from './employee.actions';
import { HttpError } from '../../http/http.error.type';
import { EmployeeService } from '../services/employees-service';
import { Employee } from '../api/employee';
import { Immutable } from 'src/features/http/immutable';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly employeeService: EmployeeService
  ) {}

  fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployees),
      switchMap((action) => {
        return this.employeeService.fetchAllEmployees().pipe(
          map((payload: Immutable<Array<Employee>>) =>
            fetchEmployeesSuccess({ payload })
          ),
          catchError((error: HttpError) => of(fetchEmployeesError({ error })))
        );
      })
    )
  );

  selectEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectEmployee),
      map((action) => selectEmployeeSuccess({ payload: action.payload }))
    )
  );

  selectEmployeeSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(selectEmployeeSuccess),
    tap((action) => {
      this.router.navigateByUrl('/details');
    })
    ),
    {dispatch: false}
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

  updateOrCreateSucces$ = createEffect(() => this.actions$.pipe(
    ofType(updateEmployeeSuccess, createEmployeeSuccess),
    tap((action) => {
      this.router.navigateByUrl('/list');
    })
    ),
    {dispatch: false}
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap((action) => {
        return from(this.employeeService.deleteEmployee(action.id)).pipe(
          map(() => deleteEmployeeSuccess()),
          catchError((error: HttpError) => {
            console.error('Error:', error);
            return of(deleteEmployeeError({ error }));
          })
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

  employeeClear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeClear, updateEmployeeClear),
      switchMap((action) => of(selectEmployeeClear(), fetchEmployees()))
    )
  );

  deleteEmployeeClear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployeeClear),
      map((action) => fetchEmployees())
    )
  );
}
