const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET home page. */
router.get('/recipes', function(req, res, next) {
  queries.getAllRecipes().then(function (recipes) {
    res.send(recipes)
  })
})

router.get('/recipes/:id', function(req, res, next) {
  queries.getOneRecipe(req.params.id).then(function (recipe) {
    res.send(recipe)
  })
})

router.post('/recipes', function(req, res, next) {
  queries.createRecipe().then(function (recipe) {
    res.send(recipe)
  })
})

module.exports = router;
