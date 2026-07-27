# JUnit 5 Teardown Methods - Complete Guide

This project demonstrates the use of setup and teardown methods in JUnit 5 following the **Arrange-Act-Assert (AAA)** pattern.

## Project Structure

```
Teardown method/
├── src/
│   ├── main/java/com/example/
│   │   └── Calculator.java              (Class under test)
│   └── test/java/com/example/
│       ├── CalculatorTest.java          (Basic setup/teardown example)
│       └── ResourceManagementTest.java  (Advanced resource management)
├── pom.xml                              (Maven configuration)
└── README.md                            (This file)
```

## Key Annotations

### @BeforeEach
- **Purpose**: Setup method that runs **before each test**
- **Scope**: Instance method (non-static)
- **Usage**: Prepare fresh test data, initialize objects
- **Runs**: Before every @Test method

```java
@BeforeEach
public void setUp() {
    calculator = new Calculator();
}
```

### @AfterEach (Teardown)
- **Purpose**: Cleanup method that runs **after each test**
- **Scope**: Instance method (non-static)
- **Usage**: Clean up resources, reset state, free memory
- **Runs**: After every @Test method

```java
@AfterEach
public void tearDown() {
    calculator = null;
}
```

### @BeforeAll
- **Purpose**: Setup method that runs **once before all tests**
- **Scope**: Static method (required)
- **Usage**: Initialize expensive shared resources (database, file connections)
- **Runs**: Once at class initialization

```java
@BeforeAll
public static void setUpAll() {
    // Initialize shared resources
}
```

### @AfterAll (Class-level Teardown)
- **Purpose**: Cleanup method that runs **once after all tests**
- **Scope**: Static method (required)
- **Usage**: Release shared resources
- **Runs**: Once after all tests complete

```java
@AfterAll
public static void tearDownAll() {
    // Release shared resources
}
```

## Execution Flow

### CalculatorTest Execution Flow:
```
@BeforeAll (if exists)
  ↓
[For each @Test method:]
  @BeforeEach
    ↓
  @Test (test method)
    ↓
  @AfterEach
  ↓
[Next @Test method...]
  ↓
@AfterAll (if exists)
```

## AAA Pattern with Setup/Teardown

```java
@BeforeEach
public void setUp() {
    // ARRANGE: Setup
    calculator = new Calculator();
}

@Test
public void testAddition() {
    // ACT: Perform action
    int result = calculator.add(5, 3);
    
    // ASSERT: Verify result
    assertEquals(8, result);
}

@AfterEach
public void tearDown() {
    // TEARDOWN: Cleanup
    calculator = null;
}
```

## Running the Tests

### Using Maven:
```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=CalculatorTest

# Run with verbose output
mvn test -X
```

### Using IDE (VS Code):
1. Right-click on test file
2. Select "Run Tests"
3. View results in Test Explorer

## Test Classes in This Project

### 1. CalculatorTest.java
- **Purpose**: Basic setup/teardown example
- **Tests**: Addition, subtraction, multiplication, division
- **Demonstrates**: @BeforeEach and @AfterEach
- **Setup**: Creates fresh Calculator instance
- **Teardown**: Resets and nullifies calculator

### 2. ResourceManagementTest.java
- **Purpose**: Advanced resource lifecycle management
- **Tests**: File I/O operations with logging
- **Demonstrates**: @BeforeAll, @AfterAll, @BeforeEach, @AfterEach
- **Setup Levels**:
  - Class-level: Initializes shared FileWriter
  - Instance-level: Creates BufferedWriter for each test
- **Teardown Levels**:
  - Instance-level: Flushes buffers after each test
  - Class-level: Closes FileWriter after all tests

## Best Practices

1. **Keep teardown simple**: Focus on resource cleanup
2. **Use finally blocks**: Ensure cleanup even if test fails
3. **Null assignments**: Help garbage collection
4. **Close resources**: Files, connections, streams
5. **Handle exceptions**: Use try-catch in teardown
6. **Test independence**: Each test should be independent
7. **Reuse setup**: Avoid code duplication

## Common Pitfalls to Avoid

❌ **Don't**: Forget to close resources
```java
// Bad
@AfterEach
public void tearDown() {
    fileWriter = null; // Not closed!
}
```

✅ **Do**: Properly close resources
```java
// Good
@AfterEach
public void tearDown() {
    if (fileWriter != null) {
        fileWriter.close();
    }
}
```

❌ **Don't**: Share mutable state between tests
```java
// Bad
private static List<String> testData; // Shared, not reset
```

✅ **Do**: Create fresh instances per test
```java
// Good
private List<String> testData;

@BeforeEach
public void setUp() {
    testData = new ArrayList<>(); // Fresh instance
}
```

## Dependencies

- **JUnit 5.9.3**: Jupiter test framework
- **Maven 3.6+**: Build tool
- **Java 11+**: Runtime

## Output Example

When running tests, you'll see:
```
--- Setup: Creating new Calculator instance ---
[Test execution]
--- Teardown: Cleaning up resources ---
--- Teardown completed ---
```

## Additional Resources

- [JUnit 5 Official Documentation](https://junit.org/junit5/docs/current/user-guide/)
- [JUnit 5 API Documentation](https://junit.org/junit5/docs/current/api/)
- [Test Fixtures in JUnit 5](https://junit.org/junit5/docs/current/user-guide/#fixtures)

## Summary

The teardown method (`@AfterEach`) is essential for:
- Cleaning up test resources
- Preventing test pollution
- Ensuring test independence
- Proper resource management
- Maintaining test stability

Use teardown methods to create reliable, independent tests that don't interfere with each other.
