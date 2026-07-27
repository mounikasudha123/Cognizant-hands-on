CREATE TABLE IF NOT EXISTS country (
  code VARCHAR(2) PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO country (code, name) VALUES ('IN', 'India');
INSERT INTO country (code, name) VALUES ('US', 'United States of America');
