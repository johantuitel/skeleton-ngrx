import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { SkeletonNgrxState } from "../../store/skeleton-ngrx.state";
import { Immutable } from "../../http/public-api";
import { Employee } from "../api/public-api";
import { createEmployee, fetchEmployees, updateEmployee, deleteEmployee } from "./employee.actions";
import { fetchData } from "./employee.selector";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeFacade {
    constructor(private readonly store: Store<SkeletonNgrxState>) {}

    fetchEmployees(): void {
        this.store.dispatch(fetchEmployees())
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
}