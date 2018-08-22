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

router.get("/addburger", function(req,res){
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ],function(data){
        console.log("added a burger");
        res.render(res)
    });
});

router.post('/devoured', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
        // document.getElementByClassName.('devoured').onclick(){
           req.params.id == this.devoured;
    
        console.log("burger devoured");
      res.send(res);
    });
  });




// Export routes for server.js to use.
module.exports = router;
