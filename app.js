const path = require('path');
const express = require('express');
const app = express();
const port = 3010;

const root = path.join(__dirname, 'public');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('index.html', { root });
});

const menuRoutes = require
