const express = require('express');
const router = express.Router();
const queries = require('../db/queries');


router.get('/ingredients/:id', function(req, res, next) {
  queries.getAllIngredients(req.params.id).then(function (ingredients) {
    res.json(ingredients)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


////////////////// User Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/users', function(req, res, next) {
  queries.getAllUsers().then(function (users) {
    res.json(users)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.get('/users/:id', function(req, res, next) {
  queries.getOneUser(req.params.id).then(function (user) {
    res.json(user)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.post('/users', function(req, res, next) {
  var obj = {}
  obj.name = req.body.name
  console.log(obj);

  queries.createUser(obj).then(function (user) {
    res.json(user)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

////////////////// Recipe Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/recipes', function(req, res, next) {
  queries.getAllRecipes().then(function (recipes) {
    res.json(recipes)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.get('/recipes/:id', function(req, res, next) {
  queries.getOneRecipe(req.params.id).then(function (recipe) {
    res.json(recipe)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.post('/recipes', function(req, res, next) {
  var obj = {}
  obj.title = req.body.title
  obj.author = req.body.author
  obj.description = req.body.description
  obj.imgURL = req.body.imgURL
  console.log(obj);
  queries.createRecipe(obj).then(function (recipe) {
    res.json(recipe)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

////////////////// Steps Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/steps/:id', function(req, res, next) {
  queries.getRecipeSteps(req.params.id).then(function (steps) {
    res.json(steps)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.post('/steps', function(req, res, next) {
  var obj = {}
  obj.name = req.body.name
  console.log(obj);

  queries.createStep(obj).then(function (step) {
    res.json(user)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.get('/steps/:id', function(req, res, next) {
  queries.getRecipeSteps(req.params.id).then(function (steps) {
    res.json(steps)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


////////////////// Rating Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/rating/:id', function(req, res, next) {
  queries.getAvgRating(req.params.id).then(function (avg) {
    res.json(avg)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


module.exports = router;
