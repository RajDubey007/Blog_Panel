# Blog Post Panel Project

## Overview

This project is a Blog Post Panel where users can register, log in, create, read, edit, and delete their blogs. Users can view blogs posted by others but can only modify their own. The project is built using a full-stack JavaScript framework with user authentication, blog management, and image uploading features.

## Project Stack

- **Frontend (UI)**: EJS (Embedded JavaScript)
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js (for user registration and login)
- **File Uploads**: Multer (for blog image uploads)

## Features

### User Authentication

- **Register**: Users can create an account.
- **Login**: Users can log in using Passport.js authentication.
- **Session Management**: Use cookies/sessions to maintain user sessions.

### Blog Management

- **Add Blog**: Users can create a blog post with a title, content, and an image (uploaded using Multer).
- **Edit Blog**: Users can edit their own blog posts.
- **Delete Blog**: Users can delete their own blog posts.

### View Blogs

- **All Blogs Page**: A public page that shows all users' blogs in a view-only format.
- **My Blogs Page**: Logged-in users can view, edit, or delete their own blogs.

## Key Routes & Logic

### User Authentication Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user using Passport.js.
- `GET /logout`: Log out the current user.

### Blog Routes

- `GET /blogs`: View all users' blogs.
- `GET /my-blogs`: View the logged-in user’s blogs (with options to edit/delete).
- `POST /blogs/add`: Add a new blog post (with file/image upload).
- `POST /blogs/edit/:id`: Edit a specific blog post (only by the blog’s author).
- `DELETE /blogs/delete/:id`: Delete a specific blog post (only by the blog’s author).

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/akradadiya28/Blog_Panel.git
   cd Blog_Panel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file:

   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Project Structure

```bash
/blog-post-panel
 ├── /db # MongoDB database │
 ├── /views # EJS templates for frontend
 ├── /routes # Express.js routes for authentication and blogs
 ├── /controllers # Business logic for handling requests
 ├── /models # Mongoose models (User, Blog)
 ├── /public # Uploaded images for blogs and user profile
 ├── index.js # Main Express.js app file
 └── package.json
```

## Learning Points

- Understanding and implementing user authentication and authorization.
- Securely handling file uploads using Multer.
- Structuring an Express.js application with a MongoDB database.
- Creating dynamic views using EJS templating.

## Future Improvements

- Implementing pagination for viewing blogs.
- Adding comments functionality to each blog post.
- Improving error handling and validation.

**Contributors**: [akradadiya28](https://github.com/akradadiya28)

If you have any questions or suggestions, feel free to open an issue or contact me at akradadiya28@gmail.com
