var UserVerification = require('../models/userVerification');
var express = require('express');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({storage})
const userVerficationRouter = express.Router();


userVerficationRouter.get('/', (req, res) => {
    res.render('index');
});

userVerficationRouter.post('/', upload.single('user_id_image'), (req, res) => {
    var user = new UserVerification({
        name: req.body.name,
        contact: req.body.contact,
        mail_id: req.body.email,
        organistaion_name: req.body.organisation_name,
        organistation_contact: req.body.organisation_contact,
        organisation_maid_id: req.body.organisation_mail
    });
    user.save()
    console.log("asd");
    res.render('index');
    //users = UserVerification.find({});
    //console.log(users);
});

module.exports = userVerficationRouter;