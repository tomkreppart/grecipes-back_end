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


router.delete('/recipes/:id', function(req, res, next) {
  queries.deleteRecipe(req.params.id).then(function (recipe) {
    res.json(recipe)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})






////////////////// Steps Queries \\\\\\\\\\\\\\\\\\\\\

router.get('/steps', function(req, res, next) {
  queries.getAllSteps(req.body).then(function (steps) {
    res.json(steps)
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


router.post('/steps', function(req, res, next) {
  var newStep = {}
  newStep.body = req.body.body
  newStep.recipe_id = req.body.recipe_id
  newStep.stepOrder = req.body.stepOrder
  console.log(newStep);

  queries.createStep(newStep).then(function (step) {
    res.json(step)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


router.put('/steps/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  knex("steps")
      .where("id", req.params.id)
      .update({
        body: req.body.body,
        stepOrder: req.body.stepOrder,
      })
      .then(function (editStep) {
        res.json(editStep)
      })
      .catch((result) => {
        console.log("error results", result)
      });
})


router.delete('/steps/:recipe_id', function(req, res, next) {
  queries.deleteAllSteps(req.params.recipe_id).then(function (steps) {
    res.json(steps)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


router.delete('/steps/:recipe_id/:stepOrder', function(req, res, next) {
  queries.deleteOneStep(req.params.recipe_id, req.params.stepOrder).then(function (step) {
    res.json(step)
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


router.get('/reviews/:recipe_id', function(req, res, next) {
  queries.getSetOfReviews(req.params.recipe_id).then(function (reviews) {
    res.json(reviews)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


router.post('/reviews', function(req, res, next) {
  var newReview = {}
  newReview.body = req.body.body
  newReview.rating = req.body.rating
  newReview.recipe_id = req.body.recipe_id
  newReview.user_id = req.body.user_id
  console.log(newReview);

  queries.createReview(newReview).then(function (review) {
    res.json(review)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})


router.put('/reviews/:id', function(req, res, next) {

  knex("reviews")
      .where("id", req.params.id)
      // .where("recipe_id", req.params.recipe_id)
      // .andWhere("user_id", req.params.user_id)
      .update({
        body: req.body.body,
        rating: req.body.rating
      })
      .then(function (editStep) {
        res.json(editStep)
      })
      .catch((result) => {
        console.log("error results", result)
      });
})

router.delete('/reviews/:id', function(req, res, next) {
  queries.deleteReview(req.params.id).then(function (review) {
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

router.post('/ingredients/:id', function(req, res, next) {
  var newReview = {}
  newReview.body = req.body.body
  newReview.rating = req.body.rating
  newReview.recipe_id = req.body.recipe_id
  newReview.user_id = req.body.user_id
  console.log(newReview);

  queries.createReview(newReview).then(function (review) {
    res.json(review)
  })
  .catch((result) => {
    console.log("error results", result)
  });
})



module.exports = router;
