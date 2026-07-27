# JPA, Hibernate, and Spring Data JPA Hands-on

This project is a small Spring Boot application that demonstrates the relationship between:

- JPA: the Java Persistence API specification
- Hibernate: a JPA implementation/provider
- Spring Data JPA: a Spring abstraction that reduces boilerplate code over JPA

## What you will learn

1. How to define an entity using JPA annotations.
2. How Hibernate creates and manages the database tables.
3. How Spring Data JPA simplifies repository code.
4. How a service layer uses transactions.

## Project structure

- `src/main/java/.../model/Employee.java` – JPA entity
- `src/main/java/.../repository/EmployeeRepository.java` – Spring Data JPA repository
- `src/main/java/.../service/EmployeeService.java` – service layer with transactions
- `src/main/java/.../controller/EmployeeController.java` – REST endpoints

## Run the application

```bash
mvn spring-boot:run
```

Then open:

- `http://localhost:8080/employees`
- H2 console: `http://localhost:8080/h2-console`

## Test the project

```bash
mvn test
```
