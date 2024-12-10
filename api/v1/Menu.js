const express = require('express');
const router = express.Router();
const { GetCollection } = require('../../dbconnect');

router.get('/:ProductName', async (request, response) => {
    const { ProductName } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Menu Items');
    const found = await collection.findOne({ "ProductName": ProductName });
    response.json(found);
    
});

router.get('/:ID', async (request, response) => {
    const { ID } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Events');
    const found = await collection.findOne({ "ID": ID });
    response.json(found);
    
});


module.exports = router;
