require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log(process.env.MONGO_URI);


module.exports = app;


// Vos routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Evenements socket
io.on('connection', (socket) => {
    console.log(`A user connected with socket ${socket.id}`);
    socket.emit('game', {user: 1, turn: 0})
    
    socket.on("newTurn", (msg) => {
    console.log(msg);
  })
})

// Evenement serveur
server.listen(3000, () => {
    console.log('listening on *:3000');
})