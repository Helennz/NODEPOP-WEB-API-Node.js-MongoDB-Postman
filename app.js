'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//Modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//connect to Mongoose
require('./lib/connectMongoose');
require('./routes/api/products');

app.locals.title = 'NodePop';

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

//API ROUTES 
app.use('/api/products', require ('./routes/api/products'))

//WEBSITE ROUTES 
app.use('/', function(req, res, next) {
  console.log('Getting a petition');
  next();
}) 

app.use('/',         require('./routes/index'));
app.use('/usuarios', require('./routes/users'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  if (err.array) {
    err.status = 422; // validation error
    const errorInfo = err.array({ onlyFirstError: true})[0];
    console.log(errorInfo);
    err.message = `Error in ${errorInfo.location}, param "${errorInfo.param}" ${errorInfo.msg}`;
  }

  res.status(err.status || 500);

  // answer with JSON format if it is an API petition 
  if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});


module.exports = app;
