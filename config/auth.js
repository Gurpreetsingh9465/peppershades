const passport = require('passport')

module.exports = (req, res, next) => {
    if(req.isAuthenticaed()){
        next()
    }
    else {
        res.status(400).send("User not logged in")
    }
}