var express = require("express");


var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
         res.render("index", hbsObject);
    });
});

router.get("/burger/create", function(req,res){
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ],function(data){
        res.redirect("/",)
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });




// Export routes for server.js to use.
module.exports = router;
