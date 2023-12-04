const {Schema, model} = require("mongoose");

// relacije izmedju kolekcija:
// povezivanje sa id Post (ObjectId) ne postoji ovde, dolazi iz mongoose
// to je novi dataType
// ne moraju da bude obavezni
const LikeSchema = Schema({
    postId:{type: Schema.ObjectId, required:[true, "Post ID is required!"]},
    userId:{type: Schema.ObjectId, required:[true, "Member is required!"]},
    firstName: {type:String, required:[true, "Member first name is required!"]},
    lastName: {type:String, required:[true, "Member last name is required!"]},
    createdAt: {type:Date, default: () => {
        return new Date().getTime();
    }}
});

const LikeModel = model("likes", LikeSchema);
module.exports = LikeModel;