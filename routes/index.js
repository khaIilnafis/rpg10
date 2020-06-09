var express = require('express');
var router = express.Router();
var db = require('../models');

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

module.exports = router;
