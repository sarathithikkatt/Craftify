const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postname : String,
    description : String,
    image : String,
    category : String,
});

var Feeddata = mongoose.model('Feed',PostSchema);

// mongoose.model.exports = Feeddata;
module.exports = Feeddata;


const db = mongoose.connection;
db.once('error',(err)=>{
    console.log(err);
});
db.on('open',()=>{
    console.log("Post DB is connected");
})

// const postSchema = new Schema({
//     postname : {
//         type:String,
//         required:true
//             },
//     description : {
//         type:String,
//         required:true
//             },
//     image : {
//         type:String,
//         required:true
//             },
//     category : {
//         type:String,
//         required:true
//     }
// });

var Postdata = mongoose.model('post',PostSchema);

// mongoose.model.exports = Postdata;

module.exports = Postdata;