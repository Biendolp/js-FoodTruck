const router = require('express').Router()
const path = require('path');

const root = path.join(__dirname, '..', 'public');


//
/* This route should return a JSON object that contains the menu items for the food truck. */
router.get('/api/v1/menu', (request, response) =>{
    response.sendFile('index.html', { root })
})

/* This route should return a JSON object that contains the events for the food truck. */
router.get('/api/v1/events', (request, response) =>{
    response.sendFile('index.html', { root })
})

/* This route should return a JSON object that contains the menu item with the specified id. */
router.get('api/v1/menu/:id', (request, response) =>{
    response.sendFile('index.html', { root })
})

/* This route should return a JSON object that contains the event with the specified id. */
router.get('/api/v1/events/:id', (request, response) =>{
    response.sendFile('index.html', { root })
})

/* This route should add a new menu item to the database. */
router.post('/api/v1/menu', (request, response) =>{
    response.sendFile('index.html', { root })
})  

/* This route should add a new event to the database.  */
router.post('/api/v1/events', (request, response) =>{
    response.sendFile('index.html', { root })
})

module.exports = router


