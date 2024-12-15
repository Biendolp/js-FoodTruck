const express = require('express');
const app = express();
const path = require('path');
const menuRoutes = require('./routes/api/v1/Menu'); //menu api route
const eventsRoutes = require('./routes/api/v1/Events'); //events api route

const port = 3010;

// can send json
app.use(express.json());
// respond with static web pages
app.use(express.static('public'));
//enpoint connection
app.use('/api/v1/Events', eventsRoutes);
app.use('/api/v1/Menu', menuRoutes);

const root = path.join(__dirname, 'public');

app.get('/', (request, response) => {
    response.sendFile('index.html', { root });
});

app.get('/admin', (request, response) => {
    response.sendFile('admin.html', { root });
});

app.get('/event/:eventId', (request, response) => {
    response.sendFile('details.html', { root });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});