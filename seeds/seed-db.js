const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kudoApp', { useNewUrlParser: true }).then(function () {
    console.log("connected to db");
});

const User = require('../models/User');
const Event = require('../models/Kudo');

User.collection.drop();
Kudo.collection.drop();

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