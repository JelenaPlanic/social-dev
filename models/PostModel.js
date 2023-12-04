const {Schema, model} = require("mongoose");

// ne zelim da mi kreira id
const TagSchema = new Schema({
    name: {type:String, required:[true, "Tags are required!"], }},
     {_id:false});

const PostSchema = Schema({
    body: {type:String, required:[true, "Post text is required" ]},
    createdAt: {type:Date, default: () => {
        return new Date().getTime();
    }},
    image:{type:String, required:[true, "Image is required" ]},
    isPublic:{type:Boolean, default:true},
    title: {type:String, required:[true, "Title is required" ]},
    userId:{type: Schema.ObjectId, required:[true, "Member is required!"]},
    tags:  // ovo je array
    {
        type:TagSchema,
        validate: {
            validator: (tags) => tags.lenght > 0,
            message: "Tags must have at least one Tag!"
        }
    }
});

const PostModel = model("posts", PostSchema);
module.exports = PostModel;