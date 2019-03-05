const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



mongoose.connect("mongodb+srv://specialemon:199199@cluster0-qskyf.mongodb.net/KudoApp?retryWrites=true", { useNewUrlParser: true, useMongoClient: true }).then(function(){
  console.log("connected to db");
});

require('./routes/apiRoutes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});