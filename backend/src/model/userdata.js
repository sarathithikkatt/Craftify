const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    userphone : String,
    email:String,
    password:String,
    // isadmin : Boolean,
});

var Userdata = mongoose.model('user', UserSchema);

module.exports = Userdata;