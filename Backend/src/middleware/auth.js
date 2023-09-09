// Import the required libraries and modules.
const jwt = require('jsonwebtoken'); // JSON Web Token library for authentication.
const User = require('../models/User'); // Import the User model for database interaction.

// Middleware function for user authentication.
const auth = async (req, res, next) => {
    try {
        // Extract the "Authorization" header from the request.
        const authHeader = req.header('Authorization');

        // Check if the header is missing or doesn't start with 'Bearer '.
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({ error: 'Missing or invalid Authorization header' });
        }

        // Extract the token by removing 'Bearer ' prefix from the header value.
        const token = authHeader.replace('Bearer ', '');

        // Verify the token using the JWT key stored in environment variables.
        const data = jwt.verify(token, process.env.JWT_KEY);

        // Find a user in the database with the specified ID and matching token.
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });

        // If no user is found, throw an error indicating unauthorized access.
        if (!user) {
            throw new Error();
        }

        // Attach the authenticated user and token to the request for further use.
        req.user = user;
        req.token = token;

        // Move to the next middleware or route handler.
        next();
    } catch (error) {
        // Handle unauthorized access by sending a 401 response.
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }
};

// Export the auth middleware for use in other parts of the application.
module.exports = auth;
