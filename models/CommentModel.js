const {Schema, model} = require("mongoose");

// koji user je napravio commentar
const CommentSchema = Schema({

    body: {type:String, required:[true, "Comment text is required" ]},
    postId:{type: Schema.ObjectId, required:[true, "Post ID is required!"]},
    createdAt: {type:Date, default: () => {
        return new Date().getTime();
    }},
    user: 
    {
        id:{type: Schema.ObjectId, required:[true, "Member is required!"]},
        firstName:{type:String, required:[true, "Member first name is required!"]},
        lastName:{type:String, required:[true, "Member last name is required!"]},
    }
});


const CommentModel = model("comments", CommentSchema);
module.exports = CommentModel;