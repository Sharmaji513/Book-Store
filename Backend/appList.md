## API Endpoints
Authentication Routes
POST /api/auth/login - User Login
POST /api/auth/logout - User Logout

## Book Management Routes
POST /api/addbook - Add a new book (requires authentication)
GET /api/books - Retrieve all books (requires authentication)
GET /api/books/:id - Retrieve a book by ID (requires authentication)
PUT /api/books/:id - Update a book by ID (requires authentication)
DELETE /api/books/:id - Delete a book by ID (requires authentication) creste md