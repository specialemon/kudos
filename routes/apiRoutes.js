const Kudo = require("../models/Kudo");
const User = require("../models/User");

module.exports = function (app) {

    app.get("/api/kudos", function (req, res) {
        Kudo.find().populate("sender").populate("receiver").then(function (kudos) {
            res.json(kudos);
        }).catch(function (err) {
            res.json(err);
        });
    });

    //potential feature if login feature is implemented
    app.get("/api/User", function (req, res) {
        User.find({
            _id: req.body.id
        }
        ).populate(kudos).then(function (user) {
            res.json(user);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.get("/api/users", function (req, res) {
        User.find().then(function (users) {
            res.json(users);
        }).catch(function (err) {
            res.json(err);
        })
    })

    app.post("/api/user", function (req, res) {
        User.create(req.body).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.post("/api/kudo", function (req, res) {
        Kudo.create(req.body).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        });
    });

}