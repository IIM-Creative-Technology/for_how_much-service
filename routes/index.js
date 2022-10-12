var express = require('express');
var router = express.Router();
var healthService = require('../services/health/health.service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** health check route */
router.get('/health', healthService.health)

module.exports = router;
