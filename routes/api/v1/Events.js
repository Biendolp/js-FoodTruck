const express = require('express');
const router = express.Router();
const { GetCollection, ObjectId } = require('../../../dbconnect');

router.get('/', async (request, response) => {
    const collection = await GetCollection('KrustyKartAPI', 'Events')
    const found = await collection.find().toArray()
    response.json(found);
});

router.get('/:ID', async (request, response) => {
    const { ID } = request.params;
    const collection = await GetCollection('KrustyKartAPI', 'Events')
    const found = await collection.findOne({ "ID": ID });
    response.json(found);
});

router.post('/', async (request, response) => {
    const {  Name, Location, Date, Time, ID } = request.body
    const collection = await GetCollection('KrustyKartAPI', 'Events')
    const result = await collection.insertOne({ Name, Location, Date, Time, ID })
    console.log(result)
    response.send('done')
});

module.exports = router;

