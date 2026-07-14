SET SERVEROUTPUT ON;

-- Scenario 1: Apply a 1% discount to loan interest rates for customers older than 60.
DECLARE
    v_discounted_count NUMBER := 0;
BEGIN
    FOR c IN (SELECT customer_id, age, loan_interest_rate
              FROM customers) LOOP
        IF c.age > 60 THEN
            UPDATE customers
            SET loan_interest_rate = c.loan_interest_rate * 0.99
            WHERE customer_id = c.customer_id;

            v_discounted_count := v_discounted_count + 1;
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Discount applied to ' || v_discounted_count || ' customer(s).');
END;
/

-- Scenario 2: Mark customers as VIP when their balance is above 10000.
DECLARE
    v_vip_count NUMBER := 0;
BEGIN
    FOR c IN (SELECT customer_id, balance, isvip
              FROM customers) LOOP
        IF c.balance > 10000 THEN
            UPDATE customers
            SET isvip = 'Y'
            WHERE customer_id = c.customer_id;

            v_vip_count := v_vip_count + 1;
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP flag updated for ' || v_vip_count || ' customer(s).');
END;
/

-- Scenario 3: Print reminders for loans due in the next 30 days.
BEGIN
    FOR l IN (
        SELECT c.customer_name,
               l.loan_id,
               l.due_date
        FROM loans l
        JOIN customers c ON c.customer_id = l.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
        ORDER BY l.due_date
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' || l.customer_name ||
            ' has loan ' || l.loan_id ||
            ' due on ' || TO_CHAR(l.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/
