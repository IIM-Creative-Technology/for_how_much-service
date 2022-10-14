const express = require('express')
const router = express.Router()
const roomService = require('../services/room/room.service')

/** GET all available rooms */
router.get('/fetch/all', roomService.getAllRooms)

/** GET room with code */
router.get('/fetch/:code', roomService.getRoom)

/** POST create room */
router.post('/create', roomService.createRoom)

/** POST join room */
router.post('/join/:code', roomService.joinRoom)

/** DELETE room with code */
router.delete('/delete/:code', roomService.deleteRoom)

/** leave room */
router.post('/leave/:code', roomService.leaveRoom)

module.exports = router

