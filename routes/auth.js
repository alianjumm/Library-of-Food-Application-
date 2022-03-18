const router = require('express').Router();
const {body} = require('express-validator');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/assets/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })

var upload = multer({ storage: storage })

// Import Authentication Controller
const authCntrl = require("../controllers/auth");
const { getMaxListeners } = require('../models/User');

// Routes for Authentication
router.get("/auth/signup", authCntrl.auth_signup_get);
router.post("/auth/signup", [
    body('firstName').isLength({min : 5}).withMessage('First Name must be at least 5 chars long').notEmpty().withMessage('Firstname cannot be null'),
    body('lastName').isLength({min : 5}),
    body('emailAddress').isEmail(),
    body('password').isLength({min : 5})
] , upload.single('image'),
 authCntrl.auth_signup_post);

router.get("/auth/signin", authCntrl.auth_signin_get);
router.post("/auth/signin", authCntrl.auth_signin_post);

router.get("/auth/logout", authCntrl.auth_logout_get);

module.exports = router;