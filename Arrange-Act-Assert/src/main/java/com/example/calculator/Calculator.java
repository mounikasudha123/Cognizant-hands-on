package com.example.calculator;

/**
 * Simple Calculator class demonstrating basic arithmetic operations.
 * This class is used to demonstrate the AAA (Arrange-Act-Assert) pattern
 * in unit testing with JUnit.
 */
public class Calculator {
    
    private int result;

    /**
     * Constructs a Calculator with initial result of 0.
     */
    public Calculator() {
        this.result = 0;
    }

    /**
     * Adds a value to the current result.
     * @param value the value to add
     */
    public void add(int value) {
        this.result += value;
    }

    /**
     * Subtracts a value from the current result.
     * @param value the value to subtract
     */
    public void subtract(int value) {
        this.result -= value;
    }

    /**
     * Multiplies the current result by a value.
     * @param value the value to multiply by
     */
    public void multiply(int value) {
        this.result *= value;
    }

    /**
     * Divides the current result by a value.
     * @param value the divisor
     * @throws IllegalArgumentException if value is zero
     */
    public void divide(int value) {
        if (value == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        this.result /= value;
    }

    /**
     * Resets the result to 0.
     */
    public void reset() {
        this.result = 0;
    }

    /**
     * Gets the current result.
     * @return the current result value
     */
    public int getResult() {
        return this.result;
    }

    /**
     * Sets the result to a specific value.
     * @param value the value to set
     */
    public void setResult(int value) {
        this.result = value;
    }
}
