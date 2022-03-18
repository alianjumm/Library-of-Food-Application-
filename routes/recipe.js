var express = require('express');
var router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn")

var recipeCtrl = require('../controllers/recipe');

router.get('/recipe/mine', isLoggedIn, recipeCtrl.index_main_get);
router.get('/recipe/add', isLoggedIn, recipeCtrl.index_add_get);
router.post('/recipe/add', isLoggedIn, recipeCtrl.index_add_post);
router.get('/recipe/view', recipeCtrl.index_view_get);
router.get('/recipe/edit', isLoggedIn, recipeCtrl.recipe_edit_get);
router.put('/recipe/update', isLoggedIn, recipeCtrl.recipe_update_put);
router.get("/recipe/delete", isLoggedIn, recipeCtrl.recipe_delete_get);
router.post('/recipe/view/reviews', recipeCtrl.addReview);

module.exports = router;