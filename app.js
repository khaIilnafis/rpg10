const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cron = require('node-cron');
const passport = require('./config/passport');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const db = require('./models');
const API = require('call-of-duty-api')({platform: "xbl", ratelimit:{maxRequests: 2, perMilliseconds: 1000, maxRPS: 2}});
const theboys = ["WEBSTARIO1","xNINJA MOx","MrSheeshh","KKS","allanlallana","Nj x Pharaoh", "IIXLord0fWarXII","Barbarossa3","IIxxDEICIDExxII","ry7393","thespaceghostwm","XvXTsukuyomiXvX",
"STEPHBRYANT23","JankyJamaican","XXIHooliganIXX","icepick1213","Mr X727","masizzai","cojomatic","iSnipe Hot Java"];
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(
  session({ secret: process.env.passportSecret, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth/', authRouter);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var task = cron.schedule('*/5 * * * *', () => {
  console.log("Running job every 5minutes");
  API.login("khalilnafis@gmail.com", process.env.xboxPass)
    .then(res => {
        theboys.forEach(theboy => {
          grabStats(theboy);
        })
    })
    .catch(err => {
      console.log(err)
    });
},{
  timezone: "America/New_York"
})
task.start();

function grabStats(theboy){
    API.MWBattleData(theboy).then((output) => {
      console.log(output);
      db.Player.findOne({where: {name: theboy}})
      .then(function(player){
        if(player)
          return player.update({name: theboy, data: JSON.stringify(output)})
        return db.Player.create({name: theboy, data: JSON.stringify(output)});
      })
    }).catch(err => {
        console.log(err);
    })
}

module.exports = app;
