const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postname : String,
    description : String,
    image : String,
});

var Feeddata = mongoose.model('Feed',PostSchema);

mongoose.model.exports = Feeddata;

const db = mongoose.connection;
db.once('error',(err)=>{
    console.log(err);
});
db.on('open',()=>{
    console.log("Post DB is connected");
})
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postid : {
        type:Number,
        required:false
            },
    postname : {
        type:String,
        required:true
            },
    description : {
        type:String,
        required:true
            },
    profileid : {
        type:String,
        required:false
            },
    image : {
        type:Buffer,
        required:true
            },
    postdate : {
        type:Date,
        required:false
    },
});

var postdata = mongoose.model('post',postSchema);

mongoose.model.exports = postdata;
