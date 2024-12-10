const express = require('express');
const router = express.Router();
const { GetFood } = require('../../dbconnect');

router.get('/:ProductName', async (request, response) => {
    const { ProductName } = request.params;
    const collection = await GetFood('KrustyKartAPI', 'Menu Items');
    const item = await collection.findOne({ "ProductName": ProductName });

    if (item) {
        response.json(item);
    } 
});

module.exports = router;
