const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema= new Schema({
    title:String,
    condition:Number,
    description:String
    
})
module.exports = mongoose.model('Product', ProductSchema);