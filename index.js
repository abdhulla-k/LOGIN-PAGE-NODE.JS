const express = require( 'express' );

const path = require( 'path' );

const bodyParser = require( 'body-parser' );
const session = require('express-session');


// import routes
const loginRoute = require( './routes/login' );
const homeRoute = require( './routes/home' );

const app = express();

// use body parser
app.use( bodyParser.urlencoded( { extended: false } ));

// session 
app.use(session({
    secret: "key",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge :600000 }
}))

// set view engine
app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );

app.use( express.static( path.join( __dirname, 'public' )))

app.use( homeRoute.routes );
app.use( loginRoute.routes );
app.get(( req, res, next ) => {
    res.redirect( '/login' );
})

app.use( '/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect( "/" );
})

// able to listen the application
app.listen( 5000 );