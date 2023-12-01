const {Schema, model} = require("mongoose");
const { USER_AVATAR } = require("../config/config");

const UserSchema = new Schema({
    
    firstName: {type:String, required: [true, "First name is required!"]},
    lastName: {type:String, required: [true, "Last name is required!"]},
    email: {type:String, required: [true, "Email is required!"]},
    password: {type:String, required: [true, "Password is required!"]},
    image: {type:String, default:USER_AVATAR}, // treba mi putanja do slike
    gender: {type:String, default:null},
    birthDay: {type:Date, default:null},
    role: {type:String, default:"user"},
    createdAt: {type:Date, default: ()=> new Date().getTime()},
    updatedAt: {type:Date, default:null},
    activate: {type:Boolean, default:false} // provera email-a

});


const UserModel = model("users", UserSchema);
module.exports = UserModel;