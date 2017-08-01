
var db = require("../models");
var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll({})
        .then(function(dbBurger) {
            var hbsObject = {
                burgers: dbBurger
            };
            res.render("index", hbsObject);
        });
});

router.post("/burgers/create", function(req, res) {
    console.log("burgers_controller.js burger_name is: " + req.body.burger_name);
    db.Burger.create({
        burger_name: req.body.burger_name
    })

    .then(function(dbBurger) {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    db.Burger.update({
        devoured: true,
    }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect("/burgers");
});




module.exports = router;