const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
const cookies = require('cookies')
const jwt = require('jsonwebtoken');
const { key } = require('../../keys');

const {registerValidation, loginValidation} = require('../../config/validate')


//Creating a new user
router.post('/register', async (req, res) => {

    // console.log('POST Request')

    // //IF INPUT IS INVALID
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // console.log('Data Validated')

    // //IF EMAIL ALREADY EXIST
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email Already Exist')

    //console.log('Its a new email')

    //Hass Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    
    
    const newUser = new User ({

        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: hashPassword
    })    

    if(!error && !emailExist){
        await newUser.save().then(result => {
            console.log(result)
            res.send(result)
          })   
          .catch(err =>{
              console.log("Catch")
              res.json({
                  message: err
              })
          } )   
    }
    

})

router.post('/login', async (req, res, next) => {   
    
    passport.authenticate('local', {
        session: true
        }, (err, user, info) => {
            if(err) return next(err)
            if (!user) { 
                return res.send("LogIn Failed") 
            }
            req.logIn(user, function(err) {
            if (err) { return next(err) }
            req.session.user = "hey"
            var token = jwt.sign(user._id, key);
            res.cookie('token', token, { maxAge: 900000, httpOnly: true })
            res.send("Log In Success")              
            
        })
    })(req, res, next)  

    
    

    
})

router.get("/currentuser", (req, res) => {
   
    console.log(req.session)
    res.send(req.isAuthenticated())
    
})


router.get("/:id", async (req,res) => {
    
    const thisUser = await User.findOne({_id: req.params.id})
    res.send(thisUser)
})

router.patch('/:id', async (req, res) => {

    

    const thisUser = await User.findOne({_id: req.params.id})
    if(!thisUser) return res.status(400).send("User does not exist")

    // res.send(thisUser)

    const pass = await bcrypt.compare(req.body.oldPassword, thisUser.password)
    if(!pass) return res.status(400).send("Password is incorrect")
    
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt)
    

    
        await User.updateOne({_id: req.params.id}, {
        $set: {"password": hashPassword}
        }).then( result => {
            res.send("Updated Successfully")
        }).catch(err => {
            res.sendStatus(403)
        })
        
    

}) 

router.get('/', async (req, res) => {

    
    userArray = await User.find({})
    res.json(userArray)

})


router.delete('/deleteall', async (req, res) => {

    await User.deleteMany({})
    res.send("All Data Removed")

} )


// Export it Globally
module.exports = router