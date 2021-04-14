const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    useremail:String,
    userpass:String,
    isadmin : Boolean,
    posts : Array,
});

var Userdata = mongoose.model('user', UserSchema);

module.exports = Userdata;