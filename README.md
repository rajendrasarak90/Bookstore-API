# Bookstore API

This is a REST API project for a bookstore application built with Node.js, Express.js, and MongoDB. It provides endpoints to manage books in the bookstore.

### Installation

1. Clone the repository:
   `git clone https://github.com/rajendrasarak90/Bookstore-API.git`
2. Navigate to the project directory:
   `cd bookstore-api`
3. Install the dependencies:
   `npm install`

### Running the Project

1. Ensure that MongoDB is installed and running on your system.
2. Start the server:
   `npm start`
   The server will start running on `http://localhost:3000`.

### API Endpoints

The following endpoints are available for interacting with the Bookstore API:

- GET `/api/books` - Retrieve all books from the database.
- GET `/api/books/:id` - Retrieve a specific book by its ID.
- POST `/api/books` - Create a new book in the database.
- PUT `/api/books/:id` - Update an existing book by its ID.
- DELETE `/api/books/:id` - Delete an book by its ID.

- ##### Note:
  While creating new book or updating existing following fields should be used.
  1. `title : book name`
  2. `author : author name`

### Testing with Postman

You can use Postman to test the Bookstore API endpoints:

1. Launch Postman.
2. Set the request URL to the appropriate endpoint, e.g., `http://localhost:3000/api/books`.
3. Set the request method (GET, POST, PUT, DELETE) according to the desired operation.
4. For POST and PUT requests, set the request body to a valid JSON payload.
5. Send the request and observe the response.

### Error Handling

The API includes appropriate error handling and returns meaningful error messages in case of any issues. Please refer to the specific endpoint details above for possible error scenarios.

### Logging

This project uses the Winston library for basic error logging. The logs are written to the `error.log` file.

## Thank You ...!
