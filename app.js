require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const challengeRouter = require('./routes/play')
const roomRouter = require('./routes/room.route')
const cors = require('cors')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
console.log(process.env.MONGO_URI)

// Vos routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/play', challengeRouter)
app.use('/room', roomRouter)

module.exports = app
