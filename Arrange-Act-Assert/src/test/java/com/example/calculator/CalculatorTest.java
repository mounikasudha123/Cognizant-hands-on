package com.example.calculator;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Test class demonstrating the Arrange-Act-Assert (AAA) Pattern using JUnit 4.
 * 
 * The AAA Pattern consists of three phases:
 * 1. Arrange: Set up the test data and test fixtures
 * 2. Act: Perform the action being tested
 * 3. Assert: Verify that the result is as expected
 * 
 * The @Before method runs before each test and @After runs after each test.
 */
public class CalculatorTest {
    
    // Test fixture - shared across all test methods
    private Calculator calculator;

    /**
     * Setup method - runs before each test method.
     * This is where we perform the "Arrange" phase for all tests.
     */
    @Before
    public void setUp() {
        System.out.println("Setting up test fixture...");
        // ARRANGE: Initialize the calculator for each test
        calculator = new Calculator();
    }

    /**
     * Teardown method - runs after each test method.
     * This is where we clean up resources and perform final verifications.
     */
    @After
    public void tearDown() {
        System.out.println("Tearing down test fixture...");
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
    public void testAddition() {
        // ARRANGE (already done in @Before)
        int value = 5;

        // ACT
        calculator.add(value);

        // ASSERT
        assertEquals("Addition should result in 5", 5, calculator.getResult());
    }

    /**
     * Test subtraction operation using AAA pattern.
     * ARRANGE: Set calculator to 10
     * ACT: Subtract 3 from the calculator
     * ASSERT: Result should be 7
     */
    @Test
    public void testSubtraction() {
        // ARRANGE
        calculator.setResult(10);
        int value = 3;

        // ACT
        calculator.subtract(value);

        // ASSERT
        assertEquals("Subtraction should result in 7", 7, calculator.getResult());
    }

    /**
     * Test multiplication operation using AAA pattern.
     * ARRANGE: Set calculator to 4
     * ACT: Multiply by 5
     * ASSERT: Result should be 20
     */
    @Test
    public void testMultiplication() {
        // ARRANGE
        calculator.setResult(4);
        int value = 5;

        // ACT
        calculator.multiply(value);

        // ASSERT
        assertEquals("Multiplication should result in 20", 20, calculator.getResult());
    }

    /**
     * Test division operation using AAA pattern.
     * ARRANGE: Set calculator to 20
     * ACT: Divide by 4
     * ASSERT: Result should be 5
     */
    @Test
    public void testDivision() {
        // ARRANGE
        calculator.setResult(20);
        int divisor = 4;

        // ACT
        calculator.divide(divisor);

        // ASSERT
        assertEquals("Division should result in 5", 5, calculator.getResult());
    }

    /**
     * Test division by zero throws exception using AAA pattern.
     * ARRANGE: Set calculator to 10
     * ACT: Attempt to divide by 0
     * ASSERT: Should throw IllegalArgumentException
     */
    @Test(expected = IllegalArgumentException.class)
    public void testDivisionByZero() {
        // ARRANGE
        calculator.setResult(10);

        // ACT & ASSERT
        calculator.divide(0); // Should throw IllegalArgumentException
    }

    /**
     * Test reset operation using AAA pattern.
     * ARRANGE: Set calculator to 100
     * ACT: Reset the calculator
     * ASSERT: Result should be 0
     */
    @Test
    public void testReset() {
        // ARRANGE
        calculator.setResult(100);

        // ACT
        calculator.reset();

        // ASSERT
        assertEquals("Reset should set result to 0", 0, calculator.getResult());
    }

    /**
     * Test multiple operations in sequence using AAA pattern.
     * ARRANGE: Initialize calculator with value 10
     * ACT: Add 5, then multiply by 2, then subtract 4
     * ASSERT: Result should be 26 ((10 + 5) * 2 - 4 = 30 - 4 = 26)
     */
    @Test
    public void testMultipleOperations() {
        // ARRANGE
        calculator.setResult(10);

        // ACT
        calculator.add(5);
        calculator.multiply(2);
        calculator.subtract(4);

        // ASSERT
        assertEquals("Multiple operations should result in 26", 26, calculator.getResult());
    }
}
