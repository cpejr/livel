//Dependencies
const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const session = require('express-session');

//Enviroment Varuabkes Setup
require('dotenv').config;

//Routes
const indexRouter = require('./routes');
const usersRouter = require('./routes');
const coachRouter = require('./routes');
const coacheesRouter = require('./routes')
const app = express();

// View Engine Setup
app.engine('hbs', exphbs({
  defaultLayout: 'layoutClean',
  extname: '.hbs',
  partialsDir: 'views',
  helpers: {
    // Here we're declaring the #section that appears in layout/layout.hbs
    section(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
    // If variable equals...
    ifCond(v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    },

    ifNotEq(v1, v2, options) {
      if (v1 !== v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  }
}));

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'hbs');

//Aplicattion Configuration

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieParser());
app.use(session({
  secret: 'some-private-cpe-key',
  key: 'cpe',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coach', coachRouter);
app.use('/coachees', coacheesRouter);

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
  res.render(`${__dirname}/views/pages/Error/error`);
});


//Transform .sass to .css
app.use(sassMiddleware({
  src: path.join(__dirname, 'views/pages/login'),
  dest: path.join(__dirname, 'views/pages/login'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

/*
1 - app.use middleware defaults to '/'
2 - static is relative to the directory where you launch node. Perhaps you need some path method as well
*/
//app.use(express.static(path.join(__dirname, 'src')))

module.exports = app;
