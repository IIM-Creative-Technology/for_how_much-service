const db = require('../../common/db/db')
module.exports.play = (socket) => {
  socket.on('start', (data) => {
    console.log('start', data)
    db.client.collection('rooms').find({ code: data.code }).toArray()
      .then((rooms) => {
        console.log('emit')
        socket.emit('startGame', [rooms[0].code, 10])
      })
  })

  socket.on('play', (data) => {
    db.client.collection('rooms').find({ code: data.code }).toArray().then((result) => {
      if (!result[0].firstScore) {
        db.client.collection('rooms').updateOne({ code: data.code }, { $set: { firstScore: data.score } })
        socket.emit('wait')
      } else {
        socket.broadcast.emit('endGame', { score: result[0].firstScore, userAsk: result[0].userAsk })
      }
    })
  })
}
