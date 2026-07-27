package com.example;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

import java.io.*;

/**
 * Test class demonstrating different levels of Setup and Teardown
 * - @BeforeEach/@AfterEach: runs before/after EACH test
 * - @BeforeAll/@AfterAll: runs ONCE before/after ALL tests (must be static)
 */
@DisplayName("Resource Management Tests")
public class ResourceManagementTest {
    
    private static FileWriter fileWriter;
    private BufferedWriter bufferedWriter;
    private static final String TEST_FILE = "test_output.txt";
    
    /**
     * Class-level setup - runs ONCE before all tests in this class
     * Used for expensive operations (database connections, etc.)
     */
    @BeforeAll
    public static void setUpAll() {
        System.out.println("\n========== @BeforeAll: Class-level setup (runs once) ==========");
        System.out.println("Initializing shared resources for all tests...");
        try {
            fileWriter = new FileWriter(TEST_FILE, true);
            fileWriter.write("=== Test Session Started ===\n");
            fileWriter.flush();
            System.out.println("File writer initialized and log file created");
        } catch (IOException e) {
            System.err.println("Failed to initialize file writer: " + e.getMessage());
        }
    }
    
    /**
     * Instance-level setup - runs BEFORE each test
     * Used for test-specific resource preparation
     */
    @BeforeEach
    public void setUp() {
        System.out.println("\n--- @BeforeEach: Instance-level setup (runs before each test) ---");
        try {
            bufferedWriter = new BufferedWriter(fileWriter);
            System.out.println("BufferedWriter created for current test");
        } catch (Exception e) {
            System.err.println("Error in setUp: " + e.getMessage());
        }
    }
    
    /**
     * Instance-level teardown - runs AFTER each test
     * Used to clean up test-specific resources
     */
    @AfterEach
    public void tearDown() {
        System.out.println("--- @AfterEach: Instance-level teardown (runs after each test) ---");
        try {
            if (bufferedWriter != null) {
                bufferedWriter.flush();
                // Don't close fileWriter here as it's shared among tests
                System.out.println("BufferedWriter flushed and resources cleaned");
            }
        } catch (IOException e) {
            System.err.println("Error in tearDown: " + e.getMessage());
        } finally {
            bufferedWriter = null;
            System.out.println("Instance-level teardown completed\n");
        }
    }
    
    /**
     * Class-level teardown - runs ONCE after all tests in this class
     * Used to release shared resources
     */
    @AfterAll
    public static void tearDownAll() {
        System.out.println("\n========== @AfterAll: Class-level teardown (runs once) ==========");
        try {
            if (fileWriter != null) {
                fileWriter.write("=== Test Session Ended ===\n");
                fileWriter.close();
                System.out.println("File writer closed and log file finalized");
            }
        } catch (IOException e) {
            System.err.println("Error in tearDownAll: " + e.getMessage());
        }
        System.out.println("Class-level teardown completed");
    }
    
    @Test
    @DisplayName("Test 1: Write to file")
    public void testWriteToFile() {
        try {
            bufferedWriter.write("Test 1: Write to file - PASSED\n");
            bufferedWriter.flush();
            System.out.println("Test 1 executed successfully");
        } catch (IOException e) {
            fail("Failed to write to file: " + e.getMessage());
        }
    }
    
    @Test
    @DisplayName("Test 2: Verify file operations")
    public void testFileOperations() {
        try {
            bufferedWriter.write("Test 2: File operations - PASSED\n");
            bufferedWriter.flush();
            System.out.println("Test 2 executed successfully");
        } catch (IOException e) {
            fail("Failed in file operations: " + e.getMessage());
        }
    }
    
    @Test
    @DisplayName("Test 3: Additional logging")
    public void testAdditionalLogging() {
        try {
            bufferedWriter.write("Test 3: Additional logging - PASSED\n");
            bufferedWriter.flush();
            System.out.println("Test 3 executed successfully");
        } catch (IOException e) {
            fail("Failed in logging: " + e.getMessage());
        }
    }
}
