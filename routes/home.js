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

router.post( '/', ( req, res, next ) => {
    let userData = { username: req.body.username, password: req.body.password };
    console.log( req.body );
    res.render( 'home', { pageTitle: 'Home', products: data } );
});

exports.routes = router;