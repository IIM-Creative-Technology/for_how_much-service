const express = require('express')
const router = express.Router()
const roomService = require('../services/room/room.service')

/** GET room with code */
router.get('/:code', roomService.getRoom)

/** POST create room */
router.post('/create', roomService.createRoom)

router.post('/join/:code', roomService.joinRoom)

module.exports = router

