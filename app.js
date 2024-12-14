const express = require('express');
const app = express();
const path = require('path');
const menuRoutes = require('./api/v1/Menu');  // Adjusted path to your Menu.js file

const port = 3010;

app.use(express.json());  // For parsing application/json
app.use(express.static('public'));  // Serve static files

// Use your route from Menu.js
app.use('/api/v1/Menu', menuRoutes);

// Serve the homepage (index.html)
const root = path.join(__dirname, 'public');
app.get('/', (request, response) => {
    res.sendFile('index.html', { root });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
