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





/* This route should return a JSON object that contains the menu items for the food truck. */
app.get('/api/v1/menu', (request, response) =>{

})

/* This route should return a JSON object that contains the events for the food truck. */
app.get('/api/v1/events', (request, response) =>{

})

/* This route should return a JSON object that contains the menu item with the specified id. */
app.get('api/v1/menu/:id', (request, response) =>{

})

/* This route should return a JSON object that contains the event with the specified id. */
app.get('/api/v1/events/:id', (request, response) =>{

})

/* This route should add a new menu item to the database. */
app.post('/api/v1/menu', (request, response) =>{

})

/* This route should add a new event to the database.  */
app.post('/api/v1/events', (request, response) =>{

})






const menuRoutes = require
app.listen(port, () => console.log(`http://localhost:${port}/`))