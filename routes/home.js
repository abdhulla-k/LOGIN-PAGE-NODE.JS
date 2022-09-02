const express = require( 'express' );

const router = express.Router();

const data = [ 
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
    { url : "https://media.istockphoto.com/photos/taj-mahal-sunrise-picture-id155096944?k=20&m=155096944&s=612x612&w=0&h=Pt-Li__LwwiTJtk8Cu5oNVL8jwUtlgWK6CKLbByXjiQ=", content: "Tajmahal. A mornimant in India" },
];

const authData = { email: 'testuser@gmail.com', password: 'abcdefgh' };
let authStatus = { emailStatus: '', passwordStatus: '' };

router.post( '/', ( req, res, next ) => {

    // save auth data
    let userData = { email: req.body.email, password: req.body.password };


    authStatus.emailStatus = userData.email === 'testuser@gmail.com' ? '' : 'invalid emial';
    authStatus.passwordStatus = userData.password === "abcdefgh" ? '' : 'invalid password';

    // check is it correct or not
    if( userData.email === authData.email && userData.password === authData.password ) {
        res.render( 'home', { pageTitle: 'Home', products: data } );

    } else {
        res.redirect( '/login' );
    }
});

exports.routes = router;
exports.authStatus = authStatus;