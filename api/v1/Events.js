const express = require('express');
const router = express.Router();
const { GetCollection } = require('../../dbconnect');


router.get('/:ID', async (request, response) => {
    const { ID } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Events');
    const found = await collection.findOne({ "ID": ID });
    response.json(found);
    
});

module.exports = router;