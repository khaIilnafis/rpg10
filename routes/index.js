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

router.post('/api/login', function(req,res){
  API.login("khalilnafis@gmail.com", process.env.xboxPass)
  .then(res =>{
    console.log(res);
    API.getLoggedInUserInfo()
    .then(user => {
      console.log(user)
      API.MWfullcombatwz(user.userInfo.userName, API.platforms.uno)
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  }).catch(err => {
  console.log(err)
  })
});

// API.MWfriends(user.userInfo.userName, API.platforms.uno)
// .then(data =>{
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })
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
// var intervalCount = 0;

// var task = cron.schedule('*/59 * * * *', () => {
//   console.log("Running job every 1minute");
//   intervalCount = 0;
//       let myInterval = setInterval(function(){
//         API.login("khalilnafis@gmail.com", process.env.xboxPass)
//         .then(res => {
//             console.log(res);
//             console.log(`Interval count is: ${intervalCount}`);
//             if(intervalCount < theboys.length){
//               console.log(`Grabbing Data for ${theboys[intervalCount]}`);
//               grabStats(theboys[intervalCount]);
//               intervalCount++;
//             }else{
//               console.log(`Interval Cleared`)
//               clearInterval(myInterval);
//             }
//         })
//         .catch(err => {
//             console.log(err)
//           });
//       }, 4000)
  
// },{
//   timezone: "America/New_York"
// })
// task.start();

// function grabStats(theboy){
//     API.MWBattleData(theboy).then((output) => {
//       console.log(output);
//       db.Player.findOne({where: {name: theboy}})
//       .then(function(player){
//         if(player)
//           return player.update({name: theboy, data: JSON.stringify(output)})
//         return db.Player.create({name: theboy, data: JSON.stringify(output)});
//       })
//     }).catch(err => {
//         console.log(err);
//     })
// }
// })

module.exports = router;
