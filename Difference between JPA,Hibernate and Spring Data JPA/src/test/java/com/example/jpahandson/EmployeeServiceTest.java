package com.example.jpahandson;

import com.example.jpahandson.model.Employee;
import com.example.jpahandson.service.EmployeeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class EmployeeServiceTest {

    @Autowired
    private EmployeeService employeeService;

    @Test
    void shouldSaveEmployee() {
        Employee employee = new Employee();
        employee.setName("Alice");
        employee.setEmail("alice@example.com");

        Employee saved = employeeService.saveEmployee(employee);

        assertNotNull(saved.getId());
    }
}
