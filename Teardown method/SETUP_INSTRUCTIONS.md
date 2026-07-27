# JUnit 5 Project Setup Instructions

## Quick Start

### Option 1: Using Maven (Recommended)

1. **Install Maven** (if not already installed):
   - Download from: https://maven.apache.org/download.cgi
   - Extract and add to PATH

2. **Run Maven to download dependencies**:
   ```bash
   mvn clean install
   ```

3. **Run tests**:
   ```bash
   mvn test
   ```

### Option 2: Using VS Code Java Extension (No Maven Required)

1. **Install the Extension Pack for Java**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Extension Pack for Java"
   - Click Install

2. **Reload VS Code**:
   - Press Ctrl+Shift+P
   - Type "Reload Window"
   - Press Enter

3. **Run Tests**:
   - Right-click on test file
   - Select "Run Tests" or "Debug Tests"

### Option 3: Manual JUnit 5 Download

1. Download JUnit 5 JARs from Maven Central:
   - junit-jupiter-api-5.9.3.jar
   - junit-jupiter-engine-5.9.3.jar

2. Create `lib/` folder in project root

3. Place JARs in the `lib/` folder

4. Configure classpath in `.vscode/settings.json`:
   ```json
   "java.project.referencedLibraries": ["lib/**/*.jar"]
   ```

## Troubleshooting

### Error: "The import org.junit cannot be resolved"
- Solution: Run `mvn clean install` or use VS Code Extension Pack for Java

### Tests don't run
- Solution: Ensure `.vscode/settings.json` has correct paths configured
- Reload VS Code after changes

### Module not found
- Solution: Check that `pom.xml` is in project root
- Run Maven clean install again

## Files Created

- `.project` - Eclipse project configuration
- `.classpath` - Eclipse classpath configuration
- `.vscode/settings.json` - VS Code Java settings
- `pom.xml` - Maven project configuration

## Next Steps

1. Install Maven OR Extension Pack for Java
2. Reload VS Code
3. Open Test Explorer (Ctrl+Shift+O)
4. Run tests directly from the interface

Errors should disappear once dependencies are resolved!
