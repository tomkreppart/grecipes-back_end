const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllUsers().then(function (users) {
    res.send("users",  {users: users})
  })
})

module.exports = router;
