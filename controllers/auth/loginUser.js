const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const loginUser = async (req, res, next) => {
    const {email, password} = req.body;

    try 
    {
        // trazim korisnika putem email-a:
        let foundUser = await UserModel.findOne({email});
        // ako ne postoji user:
        if(!foundUser) return next(new Error("User with this email doesn't not exist"));
       
        // ako postoji: proveravam da li uneti password odgovara pass iz baze (putem bcrypta)
          bcrypt.compare(password, foundUser.password, (err, isMatch) => {
            if(err) return next(err);
            if(isMatch) 
            { // user is logged 
                req.session.user = { //  req.session je prazan object!
                    firstName : foundUser.firstName,
                    lastName : foundUser.lastName,
                    image : foundUser.image,
                    role : foundUser.role,
                    _id : foundUser._id
                }; 
                res.redirect("/posts");
            } else {
                return next(new Error("Password is wrong!"));
            }  
        });

    } 
    catch (error) {
        console.log("Login", error);
        next(error);
    }
};

module.exports = loginUser;