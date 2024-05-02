package nl.skeleton.ngrx.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import nl.skeleton.ngrx.models.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import nl.skeleton.ngrx.models.Employee;

@RestController
@RequestMapping("/skeleton/v1")
public class EmployeesController {

    private final Employee johnDoe = createEmployee(1L, "John Doe", "IT", "Software Engineer", 50000.00);
    private final Employee janeSmith = createEmployee(2L, "Jane Smith", "FINANCE", "Accountant", 60000.00);
    private final Employee aliceJohnson = createEmployee(3L, "Alice Johnson", "IT", "System Administrator", 55750.00);
    private final Map<Long, Employee> employees = new HashMap<>();

    public EmployeesController() {
        employees.put(johnDoe.getId(), johnDoe);
        employees.put(janeSmith.getId(), janeSmith);
        employees.put(aliceJohnson.getId(), aliceJohnson);
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Employee>> getAllEmployees() {
        Collection<Employee> employeeCollection = new ArrayList<>(employees.values());
        return new ResponseEntity<>(employeeCollection, HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:4200")
    @PutMapping(value = "/employees/{employeeId}", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> updateEmployeeById(@PathVariable Long employeeId, @RequestBody Employee employee) {
        if(!this.employees.containsKey(employeeId)) {
            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
        }
        
        this.employees.put(employeeId, employee);
        
        return new ResponseEntity<>("Employee updated successfully", HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseMessage> createEmployee(@RequestBody Employee employee) {
        if(this.employees.containsKey(employee.getId())) {
            return new ResponseEntity<>(new ResponseMessage("Employee already exists"), HttpStatus.BAD_REQUEST);
        }

        this.employees.put(employee.getId(), employee);

        return new ResponseEntity<>(new ResponseMessage("Employee created successfully"), HttpStatus.CREATED);
    }

    @CrossOrigin("http://localhost:4200")
    @DeleteMapping(value = "/employees/{employeeId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseMessage> deleteEmployeeById(@PathVariable Long employeeId) {
        if(!this.employees.containsKey(employeeId)) {
            return new ResponseEntity<>(new ResponseMessage("Employee not found"), HttpStatus.NOT_FOUND);
        }

        this.employees.remove(employeeId);

        return new ResponseEntity<>(new ResponseMessage("Employee removed successfully"), HttpStatus.OK);
    }

    private Employee createEmployee(Long id, String name, String department, String position, Double salary) {
        Employee employee = new Employee();
        employee.setId(id);
        employee.setName(name);
        employee.setDepartment(department);
        employee.setPosition(position);
        employee.setSalary(salary);

        return employee;
    }
}
