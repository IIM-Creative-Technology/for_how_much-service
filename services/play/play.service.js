const db = require("../../common/db/db");
module.exports.play = (socket) => {
    socket.on('start', (data) => {
       const result = db.client.collection("rooms").find({code: data.code}).toArray().then((result) => {
            socket.emit('startGame', 10);
        });
    });

    socket.on('play', (data) => {
        const result = db.client.collection("rooms").find({code: data.code}).toArray().then((result) => {
          if (typeof result[0].score === undefined) {
              db.client.collection("rooms").updateOne({code: data.code}, {$set: {firstScore: data.score}});
              socket.emit('wait');
          }else{
                if (data.score > result[0].firstScore) {
                    socket.emit('win');
                }else {
                    socket.emit('lose');
                }
          }
        });
    });
}


