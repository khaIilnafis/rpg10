var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require('./models');

const API = require('call-of-duty-api')({platform: "xbl"});


var app = express();

var theboys = ["WEBSTARIO1","xNINJA MOx","MrSheeshh","KKS","allanlallana","Nj x Pharaoh", "IIXLord0fWarXII","Barbarossa3","IIxxDEICIDExxII","ry7393","thespaceghostwm","XvXTsukuyomiXvX",
"STEPHBRYANT23","JankyJamaican","XXIHooliganIXX","icepick1213","Mr X727","masizzai","cojomatic","iSnipe Hot Java"];

var intervalCount = 0;

var task = cron.schedule('*/59 * * * *', () => {
  console.log("Running job every 1minute");
  intervalCount = 0;
      let myInterval = setInterval(function(){
        API.login("khalilnafis@gmail.com", process.env.xboxPass)
        .then(res => {
            console.log(res);
            console.log(`Interval count is: ${intervalCount}`);
            if(intervalCount < theboys.length){
              console.log(`Grabbing Data for ${theboys[intervalCount]}`);
              grabStats(theboys[intervalCount]);
              intervalCount++;
            }else{
              console.log(`Interval Cleared`)
              clearInterval(myInterval);
            }
        })
        .catch(err => {
            console.log(err)
          });
      }, 4000)
  
},{
  timezone: "America/New_York"
})
task.start();

function grabStats(theboy){
    API.MWBattleData(theboy).then((output) => {
      console.log(output);
      db.Player.findOne({where: name === theboy})
      .then(function(player){
        if(player)
          return player.update({name: theboy, data: JSON.stringify(output)})
        return db.Player.create({name: theboy, data: JSON.stringify(output)});
      })
    }).catch(err => {
        console.log(err);
    })
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
