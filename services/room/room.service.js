module.exports.getRoom = async (req, res) => {
  const db = require('../../common/db/db').client
  const collection = db.collection('rooms')
  const response = await collection.find({ code: req.params.code }).toArray()
  if (response.length === 0) {
    res.status(404).send('Room not found')
  } else {
    res.json(response[0]._id)
  }
}

module.exports.createRoom = async (req, res) => {
  const db = require('../../common/db/db').client
  const collection = db.collection('rooms')
  let needIteration = true

  let response = null
  let code = null
  while (needIteration) {
    needIteration = false
    // We want to generate a random code
    code = Math.random().toString(36).substring(2, 6).toUpperCase()
    // We check if the code is already in use
    const roomFind = await collection.find({ code }).toArray()
    if (roomFind.length === 0) {
      response = await collection.insertOne({ code })
    } else {
      needIteration = true
    }
  }
  res.json({ roomId: response.insertedId, roomCode: code })
}

module.exports.joinRoom = async (req, res) => {
  const db = require('../../common/db/db').client
  const collection = db.collection('rooms')
  const room = await collection.find({ code: req.params.code }).toArray()
  if (room.length === 0) {
    res.status(404).send('Room not found')
  } else {
    // room.
    // res.json(response[0]._id)
  }
}
