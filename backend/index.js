// server.js
const express = require('express');
const connectDB = require('./config/db');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const boilerplateRoutes = require('./routes/boilerplate.routes');
const voteRoutes = require('./routes/vote.routes');
const cors = require('cors');

const app = express();

app.use(cors(
    {
        origin: ['https://boilerplatefind-gfbowxj9g-nicolas-bustelos-projects.vercel.app'],
        methods: ['POST', 'GET'],
        credentials: true
    }
));
app.use(express.json());

// Connect to MongoDB
connectDB();

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use(middleware.requestLogger);

// Routes
app.use('/api/boilerplates', boilerplateRoutes);
app.use('/api/votes', voteRoutes);

// Error handling middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
