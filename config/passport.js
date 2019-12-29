const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const User = require('../api/models/user')

module.exports = function(passport) {

    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            
            User.findOne({ email: email }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                console.log(user)
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err){
                        console.log(err)
                    }

                    if(isMatch){
                        console.log("Password Matched")
                        return done(null, user);
                    } 
                    else{
                        console.log("Password didn't matched")
                        return done(null, false, {message: 'Incorrect Password'})
                    } 

                    
                })
                
            })
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser(function(id, done) {
        console.log("Bye Bye")
        User.findById(id, (err, user) => {
        done(err, user);
    })
    })
    
}