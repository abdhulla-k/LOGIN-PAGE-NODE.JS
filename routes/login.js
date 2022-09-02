const express = require( 'express' );

const session = require( 'express-session' );
const router = express.Router();

// data
const data = require( './home' );

// get data status
let homeData = require( "./home" );

router.use( '/login', ( req, res, next ) => {
    if( req.session.login === true ) {
        res.redirect( '/' );
    } else {
        res.render( 'login', {
            emailStatus: homeData.authStatus.emailStatus,
            passwordStatus: homeData.authStatus.passwordStatus
        });
    }
});

exports.routes = router;