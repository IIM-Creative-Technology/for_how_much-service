const express = require('express')
const router = express.Router()
const healthService = require('../services/health/health.service')
const challengeService = require('../services/play/play.service')
const playService = require('../services/play/play.service')

/** health check route */
router.get('/health', healthService.health)

module.exports = router
