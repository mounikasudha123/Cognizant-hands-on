package com.example.calculator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Test class demonstrating the Arrange-Act-Assert (AAA) Pattern using JUnit 5.
 * 
 * The AAA Pattern consists of three phases:
 * 1. Arrange: Set up the test data and test fixtures
 * 2. Act: Perform the action being tested
 * 3. Assert: Verify that the result is as expected
 * 
 * The @BeforeEach method runs before each test and @AfterEach runs after each test.
 * This is the modern JUnit 5 approach with more descriptive annotations.
 */
@DisplayName("Calculator Tests using JUnit 5 AAA Pattern")
public class CalculatorJUnit5Test {
    
    // Test fixture - shared across all test methods
    private Calculator calculator;

    /**
     * Setup method - runs before each test method (JUnit 5 style).
     * This is where we perform the "Arrange" phase for all tests.
     */
    @BeforeEach
    public void setUp() {
        System.out.println("JUnit 5: Setting up test fixture...");
        // ARRANGE: Initialize the calculator for each test
        calculator = new Calculator();
    }

    /**
     * Teardown method - runs after each test method (JUnit 5 style).
     * This is where we clean up resources and perform final verifications.
     */
    @AfterEach
    public void tearDown() {
        System.out.println("JUnit 5: Tearing down test fixture...");
        // Clean up resources
        calculator = null;
    }

    /**
     * Test addition operation using AAA pattern.
     * ARRANGE: Calculator is initialized to 0
     * ACT: Add 5 to the calculator
     * ASSERT: Result should be 5
     */
    @Test
    @DisplayName("Should add two numbers correctly")
    public void testAddition() {
        // ARRANGE (already done in @BeforeEach)
        int value = 5;

        // ACT
        calculator.add(value);

        // ASSERT
        assertEquals(5, calculator.getResult(), "Addition should result in 5");
    }

    /**
     * Test subtraction operation using AAA pattern.
     * ARRANGE: Set calculator to 10
     * ACT: Subtract 3 from the calculator
     * ASSERT: Result should be 7
     */
    @Test
    @DisplayName("Should subtract two numbers correctly")
    public void testSubtraction() {
        // ARRANGE
        calculator.setResult(10);
        int value = 3;

        // ACT
        calculator.subtract(value);

        // ASSERT
        assertEquals(7, calculator.getResult(), "Subtraction should result in 7");
    }

    /**
     * Test multiplication operation using AAA pattern.
     * ARRANGE: Set calculator to 4
     * ACT: Multiply by 5
     * ASSERT: Result should be 20
     */
    @Test
    @DisplayName("Should multiply two numbers correctly")
    public void testMultiplication() {
        // ARRANGE
        calculator.setResult(4);
        int value = 5;

        // ACT
        calculator.multiply(value);

        // ASSERT
        assertEquals(20, calculator.getResult(), "Multiplication should result in 20");
    }

    /**
     * Test division operation using AAA pattern.
     * ARRANGE: Set calculator to 20
     * ACT: Divide by 4
     * ASSERT: Result should be 5
     */
    @Test
    @DisplayName("Should divide two numbers correctly")
    public void testDivision() {
        // ARRANGE
        calculator.setResult(20);
        int divisor = 4;

        // ACT
        calculator.divide(divisor);

        // ASSERT
        assertEquals(5, calculator.getResult(), "Division should result in 5");
    }

    /**
     * Test division by zero throws exception using AAA pattern.
     * ARRANGE: Set calculator to 10
     * ACT: Attempt to divide by 0
     * ASSERT: Should throw IllegalArgumentException
     */
    @Test
    @DisplayName("Should throw IllegalArgumentException when dividing by zero")
    public void testDivisionByZero() {
        // ARRANGE
        calculator.setResult(10);

        // ACT & ASSERT
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.divide(0);
        }, "Division by zero should throw IllegalArgumentException");
    }

    /**
     * Test reset operation using AAA pattern.
     * ARRANGE: Set calculator to 100
     * ACT: Reset the calculator
     * ASSERT: Result should be 0
     */
    @Test
    @DisplayName("Should reset calculator to zero")
    public void testReset() {
        // ARRANGE
        calculator.setResult(100);

        // ACT
        calculator.reset();

        // ASSERT
        assertEquals(0, calculator.getResult(), "Reset should set result to 0");
    }

    /**
     * Test multiple operations in sequence using AAA pattern.
     * ARRANGE: Initialize calculator with value 10
     * ACT: Add 5, then multiply by 2, then subtract 4
     * ASSERT: Result should be 26 ((10 + 5) * 2 - 4 = 30 - 4 = 26)
     */
    @Test
    @DisplayName("Should handle multiple operations in sequence")
    public void testMultipleOperations() {
        // ARRANGE
        calculator.setResult(10);

        // ACT
        calculator.add(5);
        calculator.multiply(2);
        calculator.subtract(4);

        // ASSERT
        assertEquals(26, calculator.getResult(), "Multiple operations should result in 26");
    }

    /**
     * Test that setup is called before each test.
     * This demonstrates that @BeforeEach creates a fresh fixture for each test.
     */
    @Test
    @DisplayName("Should start with fresh calculator in each test")
    public void testFreshFixture() {
        // ARRANGE (calculator is fresh from @BeforeEach)
        // ACT
        int result = calculator.getResult();

        // ASSERT
        assertEquals(0, result, "Each test should start with a fresh calculator initialized to 0");
    }
}
