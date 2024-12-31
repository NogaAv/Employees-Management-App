package com.bluetech.MyEmployeesApi.controller;

import com.bluetech.MyEmployeesApi.exception.ResourceNotFound;
import com.bluetech.MyEmployeesApi.model.Employee;
import com.bluetech.MyEmployeesApi.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin("http://localhost:5173")  //In order to connect the frontend to this backend application, we need to add this annotation with the port of the react(VITE) app (port: 5173). Otherwise, we get CORS problem
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //Method for getting all the employees
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //Method for creating an Employee
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        return employeeRepository.save(employee);
    }

    //Method for getting employee by id
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable(value="id") Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFound("Could Not Find Employee With Id: " + id));
        return ResponseEntity.ok(employee);
    }

    //Method for updating employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value="id") Long id, @RequestBody Employee updatedEmployee){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFound("Could Not Find Employee With Id: " + id));
        employee.setName(updatedEmployee.getName());
        employee.setCompany(updatedEmployee.getCompany());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmpl = employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmpl);
    }


    //Method for deleting employee
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable(value="id") Long id){
        if(!employeeRepository.existsById(id)){
            throw new ResourceNotFound("Could not delete Employee with id: " + id + ": Not found");
        }
        employeeRepository.deleteById(id);

        Map<String, Boolean> responseMap = new HashMap<>();
        responseMap.put("Employee id: " + id + " Deleted", true);
        return ResponseEntity.ok(responseMap);
    }
//    @DeleteMapping("/{id}")
//    public String deleteEmployee(@PathVariable(value="id") Long id){
//        if(!employeeRepository.existsById(id)){
//            throw new ResourceNotFound("Could not delete Employee with id: " + id + ": Not found");
//        }
//        employeeRepository.deleteById(id);
//
//        return "Deleted Employee with id: " + id + " Successfully";
//    }





}
