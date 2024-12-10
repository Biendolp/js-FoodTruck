const express = require('express');
const app = express();
const path = require('path');
const menuRoutes = require('./api/v1/Menu');
const eventsRoutes = require('./api/v1/Events');

const port = 3010;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1/Events', eventsRoutes);
app.use('/api/v1/Menu', menuRoutes);

const root = path.join(__dirname, 'public');

app.get('/', (request, response) => {
    response.sendFile('index.html', { root });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
