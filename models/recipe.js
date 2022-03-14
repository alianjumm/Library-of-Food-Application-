const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    updates: {type: String}
  }, {
    timestamps: true
  });

const recipeSchema = new Schema({
    cuisine: {type: String, default: 'Chinese', enum: ['Korean', 'Mexican', 'Indian', 'Thai', 'Italian', 'Mediterranean']},
    ingredients: {type: String}, 
    description: {type: String},
    personalRating: {type: Number, min: 1, max: 10},
    update: [updateSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
