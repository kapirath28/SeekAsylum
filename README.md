# Seekasylum - Asylum Seeking Platform

## Project Overview
Seekasylum is a web-based platform designed to connect asylum seekers with available asylum centers. The platform facilitates the process of finding and applying for asylum by providing information about available spaces, locations, and contact details of asylum centers.

## Technology Stack
- Java 17
- Spring Boot 3.2.3
- MySQL Database
- Maven
- Lombok
- Spring Data JPA

## Prerequisites
1. Java Development Kit (JDK) 17
2. MySQL Server
3. Maven
4. IDE (IntelliJ IDEA recommended)

## Project Setup

### 1. Database Setup
1. Install MySQL Server
2. Create a new database:
```sql
CREATE DATABASE seekasylum;
```
3. Configure database connection in `application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/seekasylum?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
    username: root
    password: your_password
```

### 2. Project Structure
```
Seekasylum/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── asylum/
│   │   │       └── Seekasylum/
│   │   │           ├── controller/
│   │   │           ├── model/
│   │   │           ├── repository/
│   │   │           ├── service/
│   │   │           └── SeekasylumApplication.java
│   │   └── resources/
│   │       └── application.yml
│   └── test/
├── pom.xml
└── README.md
```

### 3. Key Components

#### Models
1. User Model
```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String countryOfOrigin;
    private String currentLocation;
}
```

2. Asylum Model
```java
@Entity
@Table(name = "asylums")
public class Asylum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String country;
    private String city;
    private String address;
    private String description;
    private Integer capacity;
    private Integer availableSpaces;
    private String contactEmail;
    private String contactPhone;
}
```

#### API Endpoints

1. User Management
```
POST /api/auth/register - Register new user
POST /api/auth/login - User login
```

2. Asylum Management
```
POST /api/asylums - Create new asylum
GET /api/asylums - Get all asylums
GET /api/asylums/{id} - Get asylum by ID
GET /api/asylums/country/{country} - Get asylums by country
GET /api/asylums/city/{city} - Get asylums by city
GET /api/asylums/available - Get available asylums
PUT /api/asylums/{id} - Update asylum
DELETE /api/asylums/{id} - Delete asylum
```

### 4. Running the Project

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Seekasylum.git
```

2. Navigate to project directory:
```bash
cd Seekasylum
```

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8086`

### 5. Testing the API

#### Register a New User
```http
POST http://localhost:8086/api/auth/register
Content-Type: application/json

{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "countryOfOrigin": "Syria",
    "currentLocation": "Turkey"
}
```

#### Login
```http
POST http://localhost:8086/api/auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}
```

#### Create New Asylum
```http
POST http://localhost:8086/api/asylums
Content-Type: application/json

{
    "name": "Safe Haven Center",
    "country": "Germany",
    "city": "Berlin",
    "address": "123 Refugee Street",
    "description": "A safe place for refugees seeking asylum",
    "capacity": 100,
    "availableSpaces": 50,
    "contactEmail": "contact@safehaven.com",
    "contactPhone": "+49 123 456 7890"
}
```

## Development Guidelines

### Code Style
- Follow Java naming conventions
- Use meaningful variable and method names
- Add comments for complex logic
- Keep methods small and focused

### Best Practices
1. Always validate input data
2. Implement proper error handling
3. Use logging for debugging
4. Keep sensitive information in environment variables
5. Write unit tests for critical functionality

## Future Enhancements
1. Add user roles (Admin, Asylum Center Manager, Asylum Seeker)
2. Implement email verification
3. Add file upload for documents
4. Implement search functionality
5. Add review and rating system
6. Implement real-time notifications
7. Add multi-language support

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support, email support@seekasylum.com or create an issue in the repository. 