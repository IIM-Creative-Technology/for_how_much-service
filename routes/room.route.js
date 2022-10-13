const express = require('express')
const router = express.Router()
const roomService = require('../services/room/room.service')

/** GET all available rooms */
router.get('/fetch/all', roomService.getAllRooms)

/** GET room with code */
router.get('/fetch/:code', roomService.getRoom)

/** POST create room */
router.post('/create', roomService.createRoom)

router.post('/join/:code', roomService.joinRoom)


module.exports = router


