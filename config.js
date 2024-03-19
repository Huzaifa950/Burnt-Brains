// const { MongoClient } = require("mongodb");
// const url = "mongodb://0.0.0.0:27017";
// const client = new MongoClient(url);

// const database = "BurntBrains";

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("employees");
// }

// module.exports = dbConnect;

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://0.0.0.0:27017';
// const client = new MongoClient(url);
// const database = 'university';

// async function dbConnect(){
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection('students');
// }

// module.exports = dbConnect;

const mongoose = require("mongoose");

async function dbConnect() {
  try{
    await mongoose.connect("mongodb://0.0.0.0:27017/university");
    console.log("Connected to Mongo....");
  } 
  catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // throw error;
  }
}

module.exports = dbConnect;
