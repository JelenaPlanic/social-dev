const PORT = 3000;
const DB_URL = "mongodb+srv://snadmin:evMBEYidZXt7gBDf@social-db.xpl3rz6.mongodb.net/?retryWrites=true&w=majority";

const SESSION_CONFIG = {
    name: "snSession",
    secret: "47f36598b042aa97d744", // crypto.randomBytes(10).toString("hex");
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // stavljamo false jer radimo na localnom serveru http
        maxAge : 1000 * 60 * 60 * 12 // nakon ovog vremena se brise podaci iz sesije
    }
};

const USER_AVATAR = "/assets/img/user_avatar.png";



module.exports =
{
    PORT,
    DB_URL,
    SESSION_CONFIG,
    USER_AVATAR
};