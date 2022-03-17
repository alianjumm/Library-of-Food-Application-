const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review: {type: String}
  }, {
    timestamps: true
  });

const recipeSchema = new Schema({
    name: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cuisine: {type: String, default: 'korean', enum: ['korean', 'mexican', 'indian', 'thai', 'italian', 'mediterranean']},
    ingredients: {type: String}, 
    description: {type: String},
    personalRating: {type: Number},
    reviews: [reviewSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
