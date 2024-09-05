const mongoose = require('mongoose');

// Define the schema for a post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model based on the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;




