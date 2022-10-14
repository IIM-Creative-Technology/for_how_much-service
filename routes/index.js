var express = require('express');
var router = express.Router();
var healthService = require('../services/health/health.service');
var challengeService = require('../services/play/play.service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** health check route */
router.get('/health', healthService.health)

/** Map Check route */
router.get('/play', playService.play)
module.exports = router;
