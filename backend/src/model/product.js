const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/craftify');

const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productid : Number,
    productName : String,
    prodcutCode : String,
    description : String,
    price : Number,
    upiid : String,
    image : String,
    postdate : Date,
});

var Productdata = mongoose.model('product', ProductSchema);

mongoose.model.exports = Productdata;