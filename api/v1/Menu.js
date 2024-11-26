const router = require('express').router()
const { response } = require('express')
const {GetFood, ObjectId } = require('../../dbconnect')


router.get('/:Number', async (request, response) => {
    const { Number } = request.params
    const collection = await GetFood('KrustyKartAPI', 'Menu Items')
    console.log(collection.find().toArray())
    response.send('done')
})