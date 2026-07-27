package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application started.");
        logger.warn("This is a warning message.");
        logger.error("This is an error message.");

        try {
            int result = divide(10, 0);
            logger.info("Result: {}", result);
        } catch (ArithmeticException ex) {
            logger.error("Division failed: {}", ex.toString());
        }

        logger.debug("Debug details: args count = {}", args.length);
        logger.info("Application finished.");
    }

    private static int divide(int a, int b) {
        return a / b;
    }
}
