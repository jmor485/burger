var express = require('express');
var routes = require('express').Router();
var server = require('../server.js');
var Burger = require('../models/burger.js');

var port = process.env.PORT || 8080;

routes.get('/', function (req, res) {
  Burger.selectAll(function (data) {
    var allBurgers = {
      burgersdata
    };
  });
  res.render("index", allBurgers);
});

// router/post
routes.post("burgers", function (req, res) {
  Burger.addOne([
    "burger_name"
  ], [req.body.parse.burger_name])
});

// router/put
routes.put("burgers/:id", function (req, res) {
  var add = "id: " + req.params.id;
})
Burger.updateDevoured({
  devoured: true
},
  function (data) {
    res.redirect('/');
  });


module.exports = routes;