var express = require('express');
var router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn")

var exploreCtrl = require('../controllers/explore');

router.get('/recipe/explore', exploreCtrl.index_get);
router.get('/explore/:cuisine', exploreCtrl.index_cuisines_get);
router.get('/explore/:cuisine/:id', exploreCtrl.index_recipe_get);
router.post('/recipe/view/:id/reviews', recipeCtrl.addReview);


module.exports = router;