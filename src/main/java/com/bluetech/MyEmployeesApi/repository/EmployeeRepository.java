package com.bluetech.MyEmployeesApi.repository;

import com.bluetech.MyEmployeesApi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
