const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postid : Number,
    postname : String,
    description : String,
    profileid : String,
    image : String,
    postdate : Date,
});

var Feeddata = mongoose.model('Feed',PostSchema);

mongoose.model.exports = Feeddata;