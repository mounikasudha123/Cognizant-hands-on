# Spring Core – Load Country from Spring Configuration XML

This sample project demonstrates loading a `Country` bean from a Spring XML configuration file.

## Project files

- `src/main/java/com/cognizant/springlearn/Country.java` - domain class with `code`, `name`, and debug logging.
- `src/main/java/com/cognizant/springlearn/SpringLearnApplication.java` - application entry point.
- `src/main/resources/country.xml` - Spring XML bean configuration.
- `src/main/resources/application.properties` - placeholder configuration file.

## Run

### In your IDE

1. Open the project in your IDE.
2. Run `com.cognizant.springlearn.SpringLearnApplication` as a Java application.
3. Check the console output. You should see debug logs from the `Country` bean lifecycle and the country details printed.

### With Maven

If Maven is installed on your machine, run from the project root:

```powershell
mvn compile exec:java -Dexec.mainClass="com.cognizant.springlearn.SpringLearnApplication"
```

If Maven wrapper is available, use:

```powershell
./mvnw.cmd compile exec:java -Dexec.mainClass="com.cognizant.springlearn.SpringLearnApplication"
```

## Expected output

The console should show constructor/setter/getter debug messages and a line like:

```
Country : Country{code='IN', name='India'}
```
