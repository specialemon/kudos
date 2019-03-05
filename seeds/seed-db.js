const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://specialemon:199199@cluster0-qskyf.mongodb.net/KudoApp?retryWrites=true", { useNewUrlParser: true, useMongoClient: true }).then(function(){
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
}])
    .then(Users => {
        console.log(`${Users.length} users created`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });