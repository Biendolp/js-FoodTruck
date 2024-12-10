const { MongoClient, ObjectId } = require('mongodb');

const { uri } = require('./secrets/mongodb.json');

const client = new MongoClient(uri);

const GetFood = async (dbName, collectionName) => {
    await client.connect();
    return client.db(dbName).collection(collectionName);
};

module.exports = { GetFood, ObjectId };
