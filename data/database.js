
const datenv = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if(database) {
        console.log('DB is alraedy intialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDabatase = () => {
    if(!database) {
        throw new Error('DB is not initialized');
    }
    return database;
};

module.exports = {
    initDb,
    getDabatase
};
