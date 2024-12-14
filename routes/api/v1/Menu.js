const express = require('express');
const router = express.Router();
const { GetCollection, ObjectId } = require('../../../dbconnect');


router.get('/', async (request, response) => {
    const collection = await GetCollection('KrustyKartAPI', 'Menu Items')
    const found = await collection.find().toArray()
    response.json(found);
});

router.get('/:id', async (request, response) => {
    const { id } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Menu Items');
    const found = await collection.findOne({ _id: new ObjectId(id) });
    response.json(found);
    
});

router.post('/', async (request, response) => {
    const { ProductName, Description, Price, Image } = request.body
    const collection = await GetCollection('KrustyKartAPI', 'Menu Items')
    const result = await collection.insertOne({ ProductName, Description, Price, Image })
    console.log(result)
    response.send('done')
});




module.exports = router;
