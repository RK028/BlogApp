const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    user:{type: Schema.Types.ObjectId, ref: 'User', required:true},
    title:{type:String, required:true},
    body:{type:String, required:true},
    date:{type:Date, default:Date.now}
});

module.exports = mongoose.model("Post", PostSchema)