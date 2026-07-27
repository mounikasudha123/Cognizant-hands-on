package com.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Test class demonstrating @BeforeEach and @AfterEach (Teardown) annotations
 * This follows the AAA (Arrange-Act-Assert) pattern
 */
@DisplayName("Calculator Tests with Setup and Teardown")
public class CalculatorTest {
    
    private Calculator calculator;
    
    /**
     * Setup method - runs BEFORE each test
     * This is the "Arrange" part of AAA pattern
     */
    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("--- Setup: Creating new Calculator instance ---");
    }
    
    /**
     * Teardown method - runs AFTER each test
     * This cleans up resources used by the test
     */
    @AfterEach
    public void tearDown() {
        System.out.println("--- Teardown: Cleaning up resources ---");
        // Reset the calculator
        if (calculator != null) {
            calculator.reset();
        }
        // Set to null to allow garbage collection
        calculator = null;
        System.out.println("--- Teardown completed ---\n");
    }
    
    @Test
    @DisplayName("Should add two numbers correctly")
    public void testAddition() {
        // ACT
        int result = calculator.add(5, 3);
        
        // ASSERT
        assertEquals(8, result, "5 + 3 should equal 8");
    }
    
    @Test
    @DisplayName("Should subtract two numbers correctly")
    public void testSubtraction() {
        // ACT
        int result = calculator.subtract(10, 4);
        
        // ASSERT
        assertEquals(6, result, "10 - 4 should equal 6");
    }
    
    @Test
    @DisplayName("Should multiply two numbers correctly")
    public void testMultiplication() {
        // ACT
        int result = calculator.multiply(6, 7);
        
        // ASSERT
        assertEquals(42, result, "6 * 7 should equal 42");
    }
    
    @Test
    @DisplayName("Should divide two numbers correctly")
    public void testDivision() {
        // ACT
        int result = calculator.divide(20, 4);
        
        // ASSERT
        assertEquals(5, result, "20 / 4 should equal 5");
    }
    
    @Test
    @DisplayName("Should throw exception when dividing by zero")
    public void testDivisionByZero() {
        // ASSERT - Verify that exception is thrown
        assertThrows(IllegalArgumentException.class, 
            () -> calculator.divide(10, 0),
            "Should throw IllegalArgumentException when dividing by zero"
        );
    }
}
