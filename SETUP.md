# Seekasylum Project Setup Guide

## Step 1: Environment Setup

### 1.1 Install Required Software
1. Install JDK 17
   - Download from: https://adoptium.net/
   - Set JAVA_HOME environment variable
   - Verify installation: `java -version`

2. Install MySQL
   - Download from: https://dev.mysql.com/downloads/
   - Set root password during installation
   - Verify installation: `mysql --version`

3. Install Maven
   - Download from: https://maven.apache.org/download.cgi
   - Set MAVEN_HOME environment variable
   - Verify installation: `mvn -version`

4. Install IntelliJ IDEA
   - Download from: https://www.jetbrains.com/idea/download/
   - Install Lombok plugin in IntelliJ

### 1.2 Configure MySQL
1. Start MySQL service
2. Create database:
```sql
CREATE DATABASE seekasylum;
```

## Step 2: Project Setup

### 2.1 Create Spring Boot Project
1. Open IntelliJ IDEA
2. Click "New Project"
3. Select "Spring Initializr"
4. Configure project:
   - Name: Seekasylum
   - Language: Java
   - JDK: 17
   - Packaging: Jar
   - Java Version: 17
   - Group: asylum
   - Artifact: Seekasylum

5. Add dependencies:
   - Spring Web
   - Spring Data JPA
   - MySQL Driver
   - Lombok

### 2.2 Configure application.yml
Create `src/main/resources/application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/seekasylum?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
    username: root
    password: your_password
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.MySQLDialect

server:
  port: 8086

logging:
  level:
    org.hibernate.SQL: DEBUG
```

## Step 3: Create Project Structure

### 3.1 Create Package Structure
```
src/main/java/asylum/Seekasylum/
├── controller/
├── model/
├── repository/
├── service/
└── SeekasylumApplication.java
```

### 3.2 Create Model Classes
1. Create User.java in model package
2. Create Asylum.java in model package

### 3.3 Create Repository Interfaces
1. Create UserRepository.java
2. Create AsylumRepository.java

### 3.4 Create Service Classes
1. Create UserService.java
2. Create AsylumService.java

### 3.5 Create Controller Classes
1. Create AuthController.java
2. Create AsylumController.java

## Step 4: Implement Features

### 4.1 User Management
1. Implement user registration
2. Implement user login
3. Add input validation
4. Add error handling

### 4.2 Asylum Management
1. Implement CRUD operations
2. Add search functionality
3. Implement availability tracking

## Step 5: Testing

### 5.1 Test Database Connection
1. Start MySQL service
2. Run application
3. Check console for successful connection

### 5.2 Test API Endpoints
1. Use Postman or similar tool
2. Test registration endpoint
3. Test login endpoint
4. Test asylum management endpoints

## Step 6: Deployment

### 6.1 Build Project
```bash
mvn clean install
```

### 6.2 Run Application
```bash
mvn spring-boot:run
```

## Common Issues and Solutions

### 1. Database Connection Issues
- Verify MySQL service is running
- Check database credentials
- Ensure database exists

### 2. Build Issues
- Clean and rebuild project
- Update Maven dependencies
- Check Java version

### 3. Runtime Issues
- Check application logs
- Verify port availability
- Check database connection

## Next Steps

1. Add security features
2. Implement frontend
3. Add unit tests
4. Set up CI/CD
5. Deploy to production

## Resources

1. Spring Boot Documentation: https://spring.io/projects/spring-boot
2. MySQL Documentation: https://dev.mysql.com/doc/
3. Maven Documentation: https://maven.apache.org/guides/
4. IntelliJ IDEA Documentation: https://www.jetbrains.com/idea/documentation/ 