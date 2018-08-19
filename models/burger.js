var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function( col, vals, cb){
        orm.insertOne("burgers", col, vals, function(res) {
           cb(res); 
        });
    },

    updateOne: function(col, val, cb){
        orm.updateOne("burgers", col, vals, function(res){
            cb(res);
        });
    }
}
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  