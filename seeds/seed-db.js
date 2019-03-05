const mongoose = require('mongoose');

mongoose.connect("mongodb://specialemon:199199@cluster0-shard-00-00-qskyf.mongodb.net:27017,cluster0-shard-00-01-qskyf.mongodb.net:27017,cluster0-shard-00-02-qskyf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true, useMongoClient: true }).then(function () {
    console.log("connected to db");
});

const User = require('../models/User');
const Event = require('../models/Kudo');

User.deleteMany();
Kudo.deleteMany();

User.create([{
    Name: "Leon"
},
{
    Name: "Clare"
},
{
    Name: "Ada"
},
{
    Name: "Wesker"
}
]).then(Users => {
    console.log(`${Users.length} users created`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    mongoose.connection.close();
});


