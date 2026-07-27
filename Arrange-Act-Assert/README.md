# Arrange-Act-Assert (AAA) Pattern with JUnit - Test Fixtures and Lifecycle

This project demonstrates the **Arrange-Act-Assert (AAA) pattern** in unit testing using both JUnit 4 and JUnit 5, along with test setup and teardown methods.

## Project Structure

```
src/
├── main/
│   └── java/
│       └── com/example/calculator/
│           └── Calculator.java          # Main class under test
└── test/
    └── java/
        └── com/example/calculator/
            ├── CalculatorTest.java      # JUnit 4 tests with @Before/@After
            └── CalculatorJUnit5Test.java # JUnit 5 tests with @BeforeEach/@AfterEach
```

## Arrange-Act-Assert (AAA) Pattern

The AAA pattern divides each test into three clear phases:

### 1. **Arrange** (Setup)
   - Initialize test data and fixtures
   - Set up the objects needed for the test
   - Prepare the preconditions

### 2. **Act** (Execute)
   - Perform the action being tested
   - Call the method under test
   - Execute the behavior

### 3. **Assert** (Verify)
   - Check the results
   - Verify the outcome is as expected
   - Validate the postconditions

## Test Setup and Teardown Methods

### JUnit 4 Approach
```java
@Before    // Runs before each test
public void setUp() {
    calculator = new Calculator();
}

@After     // Runs after each test
public void tearDown() {
    calculator = null;
}
```

### JUnit 5 Approach
```java
@BeforeEach  // Runs before each test
public void setUp() {
    calculator = new Calculator();
}

@AfterEach   // Runs after each test
public void tearDown() {
    calculator = null;
}
```

## Key Features

✅ **Test Fixtures**: Shared resources initialized via `@Before`/`@BeforeEach`
✅ **Setup Methods**: Prepare test environment for each test
✅ **Teardown Methods**: Clean up resources after each test
✅ **AAA Pattern**: Clear three-phase structure in each test method
✅ **JUnit 4 & 5**: Examples with both frameworks
✅ **Exception Testing**: How to test exception scenarios
✅ **Multiple Operations**: Testing complex workflows

## Test Cases Included

1. **testAddition**: Basic addition test
2. **testSubtraction**: Subtraction with setup
3. **testMultiplication**: Multiplication operation
4. **testDivision**: Division with positive numbers
5. **testDivisionByZero**: Exception handling
6. **testReset**: State reset verification
7. **testMultipleOperations**: Complex operation sequences
8. **testFreshFixture** (JUnit 5 only): Verifying fixture freshness

## Running the Tests

### Using Maven
```bash
# Run all tests
mvn test

# Run specific test class (JUnit 4)
mvn test -Dtest=CalculatorTest

# Run specific test class (JUnit 5)
mvn test -Dtest=CalculatorJUnit5Test

# Run specific test method
mvn test -Dtest=CalculatorTest#testAddition
```

### Using IDE
- Right-click on test class → Run Tests
- Right-click on test method → Run Test

## Benefits of This Approach

| Benefit | Description |
|---------|-------------|
| **Clarity** | Each test has three distinct phases |
| **Reusability** | Setup/Teardown reduces code duplication |
| **Maintainability** | Changes to setup affect all tests uniformly |
| **Isolation** | Fresh fixture for each test ensures independence |
| **Readability** | Comments make AAA phases explicit |

## Lifecycle Diagram

```
@Before/@BeforeEach
        ↓
    Arrange (already done)
        ↓
    Act (test method code)
        ↓
    Assert (test method code)
        ↓
@After/@AfterEach
```

This sequence repeats for each test method.

## Notes

- **@Before** (JUnit 4) / **@BeforeEach** (JUnit 5) runs before **each** test, not once before all tests
- Use **@BeforeClass** / **@BeforeAll** for one-time setup that's expensive
- Always clean up resources in teardown methods
- Each test should be independent; don't rely on test execution order
