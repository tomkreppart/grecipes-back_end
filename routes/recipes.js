const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET users listing. */
// router.get('/recipes', function(req, res, next) {
//   queries.getAllRecipes().then(function (recipes) {
//     res.send(recipes)
//   })
// })

module.exports = router;
