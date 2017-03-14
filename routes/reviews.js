const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllReviews().then(function (recipes) {
    res.send("index",  {recipes: recipes})
  })
})

module.exports = router;
