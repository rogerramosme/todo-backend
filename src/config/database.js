require('dotenv').config();

const username = 'public';
const password = 'public';
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@todo-shard-00-00-czf0v.mongodb.net:27017,todo-shard-00-01-czf0v.mongodb.net:27017,todo-shard-00-02-czf0v.mongodb.net:27017/test?ssl=true&replicaSet=todo-shard-0&authSource=admin`;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function(event){
  console.log('mongodb connected');
});

module.exports = mongoose.connect(dbUrl);
