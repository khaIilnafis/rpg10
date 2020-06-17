var express = require('express');
var router = express.Router();
var db = require('../models');
const API = require('call-of-duty-api')({platform: "xbl", ratelimit:{maxRequests: 2, perMilliseconds: 1000, maxRPS: 2}});


/* GET home page. */
router.get('/',function(req,res){
  res.send('index.html');
})
router.get('/all-players', function(req, res, next) {
  db.Player.findAll({})
  .then(function(players){
    res.json(players);
  })
  .catch(function(err){
    res.json(err);
  })
});
router.get('/:user', function(req,res,next){
  API.MWstats(req.body.user, API.platforms.uno)
    .then(data =>{
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
});
router.get('/friends', function(req,res,next){
  API.MWfriends(user.userInfo.userName, API.platforms.uno)
    .then(data =>{
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
}); 
// router.post('/api/login', function(req,res){
//   API.login("khalilnafis@gmail.com", process.env.xboxPass)
//   .then(res =>{
//     console.log(res);
//     API.getLoggedInUserInfo()
//     .then(user => {
//       console.log(user)
//       API.MWfullcombatwz(user.userInfo.userName, API.platforms.uno)
//       .then(data => {
//         console.log(data)
//       }).catch(err => {
//         console.log(err);
//       })
//     }).catch(err => {
//       console.log(err);
//     })
//   }).catch(err => {
//   console.log(err)
//   })
// });


// API.MWfullcombatwz("iSnipe Hot Java")
// .then(data =>{
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })


// .catch(err => {
//   console.log(err);
// })


module.exports = router;
