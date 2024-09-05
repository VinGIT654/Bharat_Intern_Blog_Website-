# Bharat_Intern_Blog_Website-
Bloggers Blog is a dynamic platform showcasing engaging posts on anime and related topics. Features include a user-friendly interface, options to create, edit, and delete posts, and image uploads. The site is responsive and visually appealing, with a modern design and interactive elements

# Bloggers Blog

**Bloggers Blog** is a dynamic blogging platform designed for showcasing engaging posts on anime and other related topics. The site offers a user-friendly interface with features such as creating, editing, and deleting posts, as well as uploading images. It is responsive, visually appealing, and interactive.

## Features

- **Create New Posts:** Easily add new posts with titles and content.
- **Edit Existing Posts:** Modify and update posts as needed.
- **Delete Posts:** Remove posts from the blog.
- **Add Images:** Upload and associate images with posts.
- **Responsive Design:** Works well on various devices and screen sizes.
- **Interactive Elements:** Includes buttons for editing, deleting, and adding images.

## File Structure

- **views/**: Contains EJS templates for the frontend.
  - `edit-post.ejs`: Template for editing existing posts.
  - `index.ejs`: Homepage displaying a list of all posts.
  - `new-post.ejs`: Form for creating new posts.
  - `post.ejs`: Template for displaying a single post with its details.
  - `add-image.ejs`: Form for adding images to posts.

- **models/**:
  - `Post.js`: Mongoose schema and model defining the structure of blog posts.

- **server.js**: Main server file configuring Express, MongoDB, and middleware. Handles routes for post operations and image uploads.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bloggers-blog.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bloggers-blog
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB URI:
    ```plaintext
    MONGODB_URI=your_mongodb_uri
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the blog.

## Usage

- **Homepage:** View a list of all blog posts and navigate to individual posts.
- **Create Post:** Use the form on the "New Post" page to add new posts.
- **Edit Post:** Access the edit form via the "Edit" button on individual post pages.
- **Delete Post:** Remove posts using the "Delete" button.
- **Add Image:** Add images to posts from the "Add Image" page.

## Contributing

Feel free to submit pull requests or open issues if you find bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact (mailto: vinuthanaik550@gmail.com).

