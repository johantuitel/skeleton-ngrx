import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Immutable } from "../../http/immutable";
import { SkeletonNgrxState } from "../../store/skeleton-ngrx.state";
import { Employee } from "../api/employee";
import { createEmployee, deleteEmployee, fetchEmployees, selectEmployee, updateEmployee } from "./employee.actions";
import { fetchData, selectData } from "./employee.selector";

@Injectable()
export class EmployeeFacade {
    constructor(private readonly store: Store<SkeletonNgrxState>) {}

    fetchEmployees(): void {
        this.store.dispatch(fetchEmployees())
    }

    selectEmployee(employee: Immutable<Employee>): void {
        this.store.dispatch(selectEmployee({payload: employee}));
    }

    createEmployee(employee: Immutable<Employee>): void {
        this.store.dispatch(createEmployee({payload: employee}));
    }

    updateEmployee(employee: Immutable<Employee>): void {
        this.store.dispatch(updateEmployee({payload: employee}));
    }

    deleteEmployee(id: Immutable<string>): void {
        this.store.dispatch(deleteEmployee({id}));
    }

    getAllEmployees(): Observable<Array<Employee> | undefined> {
        return this.store.select(fetchData);
    }

    getSelectedEmployee(): Observable<Employee | undefined> {
        return this.store.select(selectData);
    }
}