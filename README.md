# SeekAsylum

A secure, modern web platform for managing asylum applications, connecting seekers with trusted centers, and providing support to those in need.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

SeekAsylum is a full-stack web application designed to help asylum seekers find, apply to, and connect with reputable asylum centers. The platform streamlines the process, offers real-time support, and provides a secure environment for sensitive data.

---

## Features

- User registration and authentication (JWT-based)
- Role-based access (asylum seeker, admin, center manager)
- Browse and search asylum centers by location, availability, and features
- Highlighted and trusted centers
- Application management and status tracking
- 24/7 support and resources
- Responsive, accessible UI with light/dark mode
- Secure password storage and user data protection

---

## Tech Stack

**Backend:**
- Java 17
- Spring Boot 3.2.x
- Spring Security (JWT)
- Spring Data JPA (Hibernate)
- MySQL

**Frontend:**
- React 18
- React Router
- Tailwind CSS (with dark mode)
- Axios

**Other:**
- Maven (backend)
- npm (frontend)
- Git & GitHub

---

## Screenshots

> _Add screenshots of your landing page, login, and dashboard here!_

---

## Getting Started

### Prerequisites

- Java 17+
- Node.js (v16+ recommended) & npm
- MySQL Server
- Maven

---

### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Seekasylum.git
   cd Seekasylum
   ```

2. **Configure the database:**
   - Create a MySQL database:
     ```sql
     CREATE DATABASE seekasylum;
     ```
   - Update `src/main/resources/application.properties` with your DB username and password.

3. **Build and run the backend:**
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
   The backend will run at [http://localhost:8086](http://localhost:8086).

---

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the frontend:**
   ```sh
   npm start
   ```
   The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
Seekasylum/
├── src/
│   ├── main/
│   │   ├── java/asylum/Seekasylum/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── SeekasylumApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.js
│   │   └── ...
│   ├── public/
│   └── package.json
├── pom.xml
└── README.md
```

---

## API Endpoints

### Auth
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — User login

### Asylum Centers
- `GET /api/asylums` — List all asylums
- `GET /api/asylums/{id}` — Get asylum by ID
- `GET /api/asylums/country/{country}` — Get asylums by country
- `GET /api/asylums/city/{city}` — Get asylums by city
- `GET /api/asylums/available` — Get available asylums
- `POST /api/asylums` — Create new asylum (admin/manager)
- `PUT /api/asylums/{id}` — Update asylum
- `DELETE /api/asylums/{id}` — Delete asylum

---

## Environment Variables

- **Backend:**  
  Set your DB credentials and JWT secret in `src/main/resources/application.properties`.

- **Frontend:**  
  If you use a `.env` file, set the backend API URL (optional for proxy).

---

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For support or questions, open an issue or email:  
**kapirathraina@gmail.com**

