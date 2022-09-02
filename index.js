const express = require( 'express' );

const path = require( 'path' );

const bodyParser = require( 'body-parser' );

// import routes
const loginRoute = require( './routes/login' );
const homeRoute = require( './routes/home' );

const app = express();

// use body parser
app.use( bodyParser.urlencoded( { extended: false } ));

// set view engine
app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );

app.use( express.static( path.join( __dirname, 'public' )))

app.use( loginRoute.routes );
app.use( homeRoute.routes );

// able to listen the application
app.listen( 5000 );