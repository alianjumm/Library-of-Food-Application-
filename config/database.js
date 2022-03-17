const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alianjumm:ali786@cluster0.abvn6.mongodb.net/ProjectDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});