var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  queries.getAllUsers().then(function (users) {
    res.send("index",  {users: users})
  })
})

module.exports = router;
