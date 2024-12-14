const { MongoClient, ObjectId } = require('mongodb');  // Ensure correct import from mongodb package

const { uri } = require('./secrets/mongodb.json');  // Import your MongoDB URI from secrets file

const client = new MongoClient(uri);  // Create a new MongoClient instance with the URI

const GetFood = async (dbName, collectionName) => {
    await client.connect();  // Connect to MongoDB
    return client.db(dbName).collection(collectionName);  // Get the collection
};

module.exports = { GetFood, ObjectId };  // Export your functions and ObjectId for use elsewhere
