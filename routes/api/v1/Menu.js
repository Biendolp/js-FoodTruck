const express = require('express');
const router = express.Router();
const { GetCollection } = require('../../../dbconnect');

router.get('/:Number', async (request, response) => {
    const { Number } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Menu Items');
    const found = await collection.findOne({ "Number": Number });
    response.json(found);
    
});




module.exports = router;
