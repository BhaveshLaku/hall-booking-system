# Hall Booking System - Project README

## Overview
This project is a Hall Booking System developed using Spring Boot for the backend, PostgreSQL as the database, and React.js for the frontend. It allows users to view, create, update, and delete bookings for the hall. Admins can modify the hall booking list, while users can only view it.

## Prerequisites
Before starting the project, make sure you have the following installed on your system:

- **Java 21+** (for Spring Boot)
- **Node.js** (for React.js)
- **npm** (Node Package Manager)
- **PostgreSQL**
- **Git** (for version control)

## Backend Setup (Spring Boot with PostgreSQL)

### 1. Clone the repository:  

 
```bash
git clone <your-repository-link>
cd <your-repository-folder> 
```

### 2. Set up the PostgreSQL Database:

Install and configure PostgreSQL if you haven't already.
Create a new database for the project.

```SQL
CREATE DATABASE hall_booking_system;
```

You will also need to configure your application.properties or application.yml in the Spring Boot project to point to your PostgreSQL instance:
properties  

```JAVA
spring.datasource.url=jdbc:postgresql://localhost:5432/hall_booking_system
spring.datasource.username=your-db-username
spring.datasource.password=your-db-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

### 3. Run the Spring Boot application:

Navigate to the backend directory and run the following command:


```
./mvnw spring-boot:run
```
The backend should now be running on localhost:8081.

## Frontend Setup (React.js)

### 1. Navigate to the React directory:

```
cd <frontend-folder>
```

### 2. Install the required dependencies:
Run the following command to install the necessary npm packages:

```
npm install
```

### 3. Run the React app:
Start the React development server by running:

```
npm start
```  
The frontend will now be running on localhost:3000.

## External Services/Databases Configuration
Ensure that your PostgreSQL service is running, and that your application is connected to the database through the application.properties file mentioned above.

## Testing the System
### 1. Test the Backend:
The API should be accessible at http://localhost:8081.
You can use tools like Postman to test the API endpoints for creating, viewing, updating, and deleting bookings.
### 2. Test the Frontend:
Open your browser and navigate to http://localhost:3000.
You should be able to see the booking list and interact with the form to create or edit bookings.

## Setup Steps (Additional Information)
### 1. Install Dependencies:
For the backend:
Make sure Maven is installed and accessible via the command line. If it's not, you can download it from Maven's official site.

For the frontend:
Ensure that Node.js and npm are installed. You can download them from Node.js official site.

### 2. Run Servers:
Run the Spring Boot backend with ./mvnw spring-boot:run.
Run the React frontend with npm start. 

### 3. Database Configuration:
If you need to reset or modify your database, you can do so through pgAdmin or by using PostgreSQL's command-line interface.
Make sure the database connection in application.properties is correctly configured to match your local PostgreSQL setup.
Conclusion
This README provides a comprehensive guide for setting up and running the Hall Booking System. Ensure that all the dependencies are correctly installed, the services are running, and the frontend is properly connected to the backend to ensure smooth functionality.

Once your project is up and running, you should be able to interact with both the backend and frontend seamlessly.
