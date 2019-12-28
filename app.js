const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser')

//Config Passport
require('./config/passport')(passport)

//Routes
const projectRoutes = require('./api/routes/projects')
const userRoutes = require('./api/routes/users')


//App Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())


//Express Session
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ 
      mongooseConnection: mongoose.connection,
       ttl: 24 * 60 * 60 
   }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
    
    }
}))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


//Route Middlewares
app.use('/project', projectRoutes)
app.use('/user', userRoutes)

//404 Not Found
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

//Errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

//Database Connection
mongoose.connect('mongodb://localhost/database', { useNewUrlParser: true },)
    // mongoose.Promise = global.Promise;



module.exports = app