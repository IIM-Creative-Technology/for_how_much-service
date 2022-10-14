var express = require('express');
var router = express.Router();
var healthService = require('../services/health/health.service');
var challengeService = require('../services/play/play.service');
const playService = require("../services/play/play.service");



/** health check route */
router.get('/health', healthService.health)

/** Map Check route */
router.get('/play', playService.play)
module.exports = router;
