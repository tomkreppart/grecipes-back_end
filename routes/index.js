const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require("../db/knex");



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

router.put('/users/:id', function(req, res, next) {
  console.log(req.body.name);
  queries.editUser(req.params.id, req.body.name).then(function (editUser) {
    res.json(editUser)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.delete('/users/:id', function(req, res, next) {
  queries.deleteUser(req.params.id).then(function (user) {
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
  queries.getOneRecipe(req.params.id, req.body).then(function (recipe) {
    res.json(recipe)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.post('/recipes', function(req, res, next) {
  var newRecipe = {}
  newRecipe.title = req.body.title
  newRecipe.author = req.body.author
  newRecipe.description = req.body.description
  newRecipe.user_id = req.body.user_id
  newRecipe.imgURL = req.body.imgURL
  console.log(newRecipe);

  queries.createRecipe(newRecipe)
  .then(function (recipe) {
    console.log(recipe);
    res.send(recipe)
  })
  .catch((result) => {
    console.log("error results", result)
  })
})

router.put('/recipes/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  knex("recipes")
      .where("id", req.params.id)
      .update({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        imgURL: req.body.imgURL
      })
      .then(function (editRecipe) {
        res.json(editRecipe)
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



////////////////// Review Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/reviews', function(req, res, next) {
  queries.getAllReviews().then(function (reviews) {
    res.json(reviews)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.get('/reviews/:id', function(req, res, next) {
  queries.getSetOfReviews(req.params.id).then(function (reviews) {
    res.json(reviews)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.post('/reviews', function(req, res, next) {
  var obj = {}
  obj.name = req.body.name
  console.log(obj);

  queries.createStep(obj).then(function (review) {
    res.json(review)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})



////////////////// Rating Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/ratingAverage/:id', function(req, res, next) {
  queries.getAvgRating(req.params.id).then(function (avg) {
    console.log(avg);
    res.json(avg)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})



////////////////// Ingredient Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/ingredients/:id', function(req, res, next) {
  queries.getAllIngredients(req.params.id).then(function (ingredients) {
    res.json(ingredients)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})

router.get('/ingredients/single/:id', function(req, res, next) {
  queries.getOneIngredient(req.params.id).then(function (ingredient) {
    res.json(ingredient)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})



module.exports = router;
