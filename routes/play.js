var express = require('express');
var router = express.Router();

/* GET Challenge listing. */
router.get('/Challenge', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
