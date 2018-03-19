//the app will look for the index.js file in the models director FIRST
//these instructions connect Mongoose db to the app
//the goal model will appear in the models/goal.js file

var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/goals-api');

mongoose.promise = Promise; // this line allows us to chain functions together in the routes

module.exports.Goal = require("./goal");



