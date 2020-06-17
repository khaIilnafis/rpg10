const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');
const API = require('call-of-duty-api')({platform: "xbl", ratelimit:{maxRequests: 2, perMilliseconds: 1000, maxRPS: 2}});

router.post('/register', function(req,res){
    console.log(req.body);
    db.User.create(req.body)
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        console.log(err);
        let errMsg = {message: ''};
        switch(err.original.errno){
            case 1062:
                errMsg.message = "An account with that email is already registered. Please Login";
                break;
            default:
                errMsg.message = "Oh shit, we couldn't do that. Please try again."
        }
        res.status(400).json(errMsg)
    })
});

router.post('/login', function(req,res, next){
    passport.authenticate('local',function(err,user,info){
        if(err){return next(err)};
        if(!user){
            res.status(400).json(info);
            // API.login(req.body.email, req.body.password)
            //     .then(data =>{
            //         db.User.create(req.body)
            //         .then(function(user){
            //             req.logIn(user, function(err) {
            //                 if (err) { return next(err); }
            //                 user.password = undefined;
            //                 return res.json({user: user, message: "Authenticated with Activision and RPG10 account created."})
            //               });
            //         })
            //         .catch(function(err){
            //             if (err) { return next(err); } 
            //         })
            //     })
            //     .catch(err =>{
            //         return res.json(404, {message:"Could not authenticate with Activision, user credentials incorrect", err:err});
            //     });
        }else{
            req.logIn({email: req.body.email, password: req.body.password}, function(err) {
                if (err) { return next(err); }
                res.json({user: user});
                // API.login(req.body.email, req.body.password)
                //     .then(data =>{
                //         user.password = undefined;
                //         res.json({user: user, message: "Authenticated with Activision and RPG10."});
                //     })
                //     .catch(err => {
                //         return res.json(err);
                //     });
              });
        }
    })(req,res,next);
    
});

module.exports = router;