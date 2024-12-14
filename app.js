const express = require('express');
const app = express();
const path = require('path');
const menuRoutes = require('./routes/api/v1/Menu'); //menu api route
const eventsRoutes = require('./routes/api/v1/Events'); //events api route

const port = 3010;

const root = path.join(__dirname, 'public');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (request, response) => {
    res.sendFile('index.html', { root });
});

const menuRoutes = require
app.listen(port, () => console.log(`http://localhost:${port}/`))