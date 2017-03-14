var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllRecipes().then(function (recipes) {
    res.send("index",  {recipes: recipes})
  })
})
