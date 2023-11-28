const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const SALT = 10;

const registerUser = async (req, res, next) => {
    const {email, password, repeatPassword, ...fullName} = req.body;

    try 
    {
        const foundUser = await UserModel.findOne({email});
        if(foundUser) return next(new Error("User with this email exists!"));
        if(password !== repeatPassword) return next(new Error("Password and repeat Password don't match!"));

        let hashPassword = await bcrypt.hash(password, SALT);
        let newUser = new UserModel({...fullName, email, password: hashPassword});
        let savedUser = await newUser.save();
        res.redirect("/");
    } 
    catch (error) 
    {
        console.log("Register user ", error);
        next(error);
    }
};

module.exports = registerUser;