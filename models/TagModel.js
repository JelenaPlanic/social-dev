const {Schema, model} = require("mongoose");

const TagSchema = Schema({
    name : {type:String, required:[true, "Name is required!"]}
});


const TagModel = model("tags", TagSchema);
module.exports = TagModel;