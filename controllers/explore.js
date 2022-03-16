const res = require('express/lib/response');
const Recipe = require('../models/recipe');
const moment = require('moment')

function index_get(req,res) {
    res.render('explore/cuisines')
}

async function index_cuisines_get(req,res) {
    let recipes = await Recipe.find({cuisine: req.params.cuisine})
    res.render(`explore/cuisines/${req.params.cuisine}/main`, {recipes});
}

async function index_recipe_get(req,res) {
    let recipe = await Recipe.findById(req.params.id);
    res.render(`explore/cuisines/${req.params.cuisine}/view`, {recipe})
}

module.exports = {
    index_cuisines_get,
    index_get,
    index_recipe_get
}