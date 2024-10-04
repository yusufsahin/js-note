const express = require('express');
const cors = require('cors');
const noteController = require('./controllers/noteController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/notes', noteController);

module.exports = app;
