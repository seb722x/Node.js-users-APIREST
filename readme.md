## Node.js Authentication API

This Node.js application serves as an authentication API for user registration, login, user information retrieval, and more. Below is the documentation for this application.

Table of Contents
1. Installation and Usage
2. Routes
    Registration
    Login
    Get User Information
    Logout
    Get All Users
    Find User
    Update User
    Delete User
3. Controllers
    Register
    Login
    User Information
    Logout
    User Controller
    Get User
    Update User
    Delete User
    Get All Users
4. Schema


1. Installation and Usage
    To install and run the application, follow these steps:

    1.1 Clone the repository and navigate to the main directory:
            https://github.com/seb722x/Node.js-users-APIREST

    1.2 Install project dependencies:
            npm install

    1.3 Configure environment variables:
            You can set your own customized environment variables. For testing purposes, a main .env file is included in this repository.
        
    1.4 Start the application:
            npm start dev
    1.5 Access the application by opening your web browser and visiting 
            http://localhost:5000.


2. Routes
The application has the following routes:

    Registration
        POST /api/v1/auth/register: Allows users to register with an email, password, name, and roles. It returns a token upon successful registration.
    Login
        POST /api/v1/auth/login: Enables user login with email and password. Returns a token upon successful login.
    Get User Information
        GET /api/v1/auth/userInfo: Retrieves user information using a token. Requires authentication.
    Logout
        GET /api/v1/auth/logout: Logs the user out by clearing the refresh token.
    Get All Users
        GET /api/v1/auth/get-all-users: Retrieves information about all registered users. Requires authentication and administrator role.
    Find User
       GET /api/v1/auth/find-user: Searches for a user by UID, name, or email.
    Update User
        PATCH /api/v1/auth/update-user: Allows updating user information, such as name and email.
    Delete User
        DELETE /api/v1/auth/delete-user: Deletes a user based on their UID.
3. Controllers
    Register
        Endpoint: POST /api/v1/auth/register
        Function: register
        Description: Allows users to register with an email, password, name, and roles. It returns a token upon successful registration.
    Login
        Endpoint: POST /api/v1/auth/login
        Function: login
        Description: Enables user login with email and password. Returns a token upon successful login.
    User Information
        Endpoint: GET /api/v1/auth/userInfo
        Function: userInfo
        Description: Retrieves user information using a token. Requires authentication.
    Logout
        Endpoint: GET /api/v1/auth/logout
        Function: logout
        Description: Logs the user out by clearing the refresh token.

4. User Controller
    Get User
        Endpoint: GET /api/v1/auth/find-user
        Function: getUser
        Description: Searches for a user by UID, name, or email.
    Update User
        Endpoint: PATCH /api/v1/auth/update-user
        Function: updateUser
        Description: Allows updating user information, such as name and email.
    Delete User
        Endpoint: DELETE /api/v1/auth/delete-user
        Function: deleteUser
        Description: Deletes a user based on their UID.
    Get All Users
        Endpoint: GET /api/v1/auth/get-all-users
        Function: getAllUsers
        Description: Retrieves information about all registered users. Requires authentication and administrator role.
5. Schema
The application uses a MongoDB schema for user data. The schema includes fields for name, email, password, and roles. Passwords are hashed using bcrypt for security.





















Routes
The application has the following routes:

Registration
POST /api/v1/auth/register: Allows users to register with an email, password, name, and roles. It returns a token upon successful registration.
Login
POST /api/v1/auth/login: Enables user login with email and password. Returns a token upon successful login.
Get User Information
GET /api/v1/auth/userInfo: Retrieves user information using a token. Requires authentication.
Logout
GET /api/v1/auth/logout: Logs the user out by clearing the refresh token.
Get All Users
GET /api/v1/auth/get-all-users: Retrieves information about all registered users. Requires authentication and administrator role.
Find User
GET /api/v1/auth/find-user: Searches for a user by UID, name, or email.
Update User
PATCH /api/v1/auth/update-user: Allows updating user information, such as name and email.
Delete User
DELETE /api/v1/auth/delete-user: Deletes a user based on their UID.
Controllers
Register
Endpoint: POST /api/v1/auth/register
Function: register
Description: Allows users to register with an email, password, name, and roles. It returns a token upon successful registration.
Login
Endpoint: POST /api/v1/auth/login
Function: login
Description: Enables user login with email and password. Returns a token upon successful login.
User Information
Endpoint: GET /api/v1/auth/userInfo
Function: userInfo
Description: Retrieves user information using a token. Requires authentication.
Logout
Endpoint: GET /api/v1/auth/logout
Function: logout
Description: Logs the user out by clearing the refresh token.
User Controller
Get User
Endpoint: GET /api/v1/auth/find-user
Function: getUser
Description: Searches for a user by UID, name, or email.
Update User
Endpoint: PATCH /api/v1/auth/update-user
Function: updateUser
Description: Allows updating user information, such as name and email.
Delete User
Endpoint: DELETE /api/v1/auth/delete-user
Function: deleteUser
Description: Deletes a user based on their UID.
Get All Users
Endpoint: GET /api/v1/auth/get-all-users
Function: getAllUsers
Description: Retrieves information about all registered users. Requires authentication and administrator role.
Schema
The application uses a MongoDB schema for user data. The schema includes fields for name, email, password, and roles. Passwords are hashed using bcrypt for security.