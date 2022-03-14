const res = require('express/lib/response');

function homePage_get(req,res) {
res.render('index', { title: 'Library of Food' });
}



module.exports = {
    homePage_get,
}