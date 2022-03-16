const res = require('express/lib/response');
const Recipe = require('../models/recipe');
const moment = require('moment')

async function index_main_get(req,res){
    let recipes = await Recipe.find({user: req.user._id});
    console.log(recipes);
    res.render('recipe/main', {recipes});
}

function index_add_get(req, res) {
    res.render('recipe/add')
}

async function index_add_post(req,res) {
    console.log(req.user)
    req.body.user = req.user._id;
    await Recipe.create(req.body);
    res.redirect('/recipe/mine');
}

async function index_view_get(req,res) {
    console.log(req.query.id);
    let recipe = await Recipe.findById(req.query.id).populate('user')
    res.render('recipe/view', {recipe, moment})

}

async function recipe_edit_get(req,res) {
    let recipe = await Recipe.findById(req.query.id)
    res.render('recipe/edit', {recipe})
}

async function recipe_update_put(req,res) {
    console.log(req.body, 'helloooo');
    await Recipe.findByIdAndUpdate(req.body.id, req.body)
    res.redirect('/recipe/mine');
}

async function recipe_delete_get(req,res) {
    await Recipe.findByIdAndDelete(req.query.id)
    res.redirect('/recipe/mine')
}

module.exports = {
    index_main_get,
    index_add_get,
    index_add_post,
    index_view_get,
    recipe_edit_get,
    recipe_update_put,
    recipe_delete_get

}