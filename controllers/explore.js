const res = require('express/lib/response');
const Recipe = require('../models/recipe');
const moment = require('moment')

function index_cuisines_get(req,res) {
    res.render('explore/cuisines')
}

module.exports = {
    index_cuisines_get,
}