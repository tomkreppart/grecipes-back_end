const express = require('express');
const router = express.Router();
const queries = require('../db/queries');



////////////////// User Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/users', function(req, res, next) {
  queries.getAllUsers().then(function (users) {
    res.send(users)
  })
})

router.get('/users/:id', function(req, res, next) {
  queries.getOneUser(req.params.id).then(function (user) {
    res.send(user)
  })
})

router.post('/users', function(req, res, next) {
  var obj = {}
  obj.name = req.body.name
  console.log(obj);

  queries.createUser(obj).then(function (user) {
    res.send(user)
  })
})

////////////////// Recipe Queries \\\\\\\\\\\\\\\\\\\\\

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
  var obj = {}
  obj.title = req.body.title
  obj.author = req.body.author
  obj.description = req.body.description
  obj.imgURL = req.body.imgURL
  console.log(obj);
  queries.createRecipe(obj)

  .then(function (recipe) {

  })
  .then(function (recipe) {
    res.send(recipe)
  })
})

////////////////// Steps Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/steps', function(req, res, next) {
  queries.getAllSteps().then(function (steps) {
    res.send(steps)
  })
})

router.get('/steps/:id', function(req, res, next) {
  queries.getOneStep(req.params.id).then(function (step) {
    res.send(step)
  })
})

router.post('/steps', function(req, res, next) {
  var obj = {}
  obj.name = req.body.name
  console.log(obj);

  queries.createStep(obj).then(function (step) {
    res.send(user)
  })
})


module.exports = router;
