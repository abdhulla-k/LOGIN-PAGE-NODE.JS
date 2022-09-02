const express = require( 'express' );

const router = express.Router();

// get data status
let homeData = require( "./home" );

router.use( '/login', ( req, res, next ) => {
    res.render( 'login', {
        emailStatus: homeData.authStatus.emailStatus,
        passwordStatus: homeData.authStatus.passwordStatus
    });
});

exports.routes = router;