package net.rishabh.ems.controller;

import lombok.AllArgsConstructor;
import net.rishabh.ems.dto.EmployeeDto;
import net.rishabh.ems.entity.Employee;
import net.rishabh.ems.service.EmployeeService;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build add employee rest api
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Build get employee rest api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employee = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employee);
    }

    //Build get all employees rest api
    @GetMapping("getAll")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> list= employeeService.getAllEmployees();
        return ResponseEntity.ok(list);
    }

    //Build update Employee rest api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long employeeId, @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto updatedEmployeeObj = employeeService.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(updatedEmployeeObj);
    }

    //Build delete Employee rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee Deleted Successfully!");
    }
}
