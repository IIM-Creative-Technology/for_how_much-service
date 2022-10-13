const { MongoClient } = require("mongodb");
// Connection URI
const uri =
    process.env.MONGO_URI;
// Create a new MongoClient
module.exports.client = new MongoClient(uri).db("nodeCours");
