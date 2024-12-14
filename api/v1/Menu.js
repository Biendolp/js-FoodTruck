const express = require('express');
const router = express.Router();
const { GetFood } = require('../../dbconnect');  // Adjusted path to your dbconnect.js

// Route for getting menu item by product name
router.get('/:ProductName', async (req, res) => {
    const { ProductName } = request.params;
    const collection = await GetFood('KrustyKartAPI', 'Menu Items');
    const item = await collection.findOne({ "ProductName": ProductName });

    if (item) {
        res.json(item);  // Return the found item as JSON
    } 
});

module.exports = router;  // Ensure the router is exported
