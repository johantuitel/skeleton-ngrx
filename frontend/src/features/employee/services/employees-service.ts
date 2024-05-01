import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../api/types/employee";
import { Immutable } from "../../http/immutable";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    private readonly PATH = 'http://localhost:8080/skeleton/v1/employees';

    constructor(private readonly httpClient: HttpClient) {}

    fetchAllEmployees(): Observable<Array<Employee>> {
       return this.httpClient.get<Array<Employee>>(this.PATH);
    }

    updateEmployee(employee: Employee): Observable<ArrayBuffer> {
        return this.httpClient.put<ArrayBuffer>(this.PATH + '/' + employee.id, employee);
    }

    createEmployee(employee: Employee): Observable<ArrayBuffer> {
        return this.httpClient.post<ArrayBuffer>(this.PATH, employee);
    }

    deleteEmployee(id: Immutable<string>): Observable<ArrayBuffer> {
        return this.httpClient.delete<ArrayBuffer>(this.PATH + '/' + id);
    }
}