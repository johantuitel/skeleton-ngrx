import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Immutable } from "../../http/immutable";
import { Employee } from "../api/employee";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    private readonly PATH = 'http://localhost:8080/skeleton/v1/employees';

    constructor(private readonly httpClient: HttpClient) {}

    fetchAllEmployees(): Observable<Immutable<Array<Employee>>> {
       return this.httpClient.get<Immutable<Array<Employee>>>(this.PATH);
    }

    updateEmployee(employee: Employee): Observable<ArrayBuffer> {
        return this.httpClient.put<ArrayBuffer>(this.PATH + '/' + employee.id, employee);
    }

    createEmployee(employee: Employee): Observable<ArrayBuffer> {
        return this.httpClient.post<ArrayBuffer>(this.PATH, employee);
    }

    deleteEmployee(id: Immutable<string>): Observable<string> {
        return this.httpClient.delete<string>(this.PATH + '/' + id);
    }
}