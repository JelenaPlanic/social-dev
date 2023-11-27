const express = require("express");
const mongoose = require("mongoose");
const { PORT, DB_URL } = require("./config/config");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static(__dirname + "/node_modules/bootstrap-icons/font"));
app.use("/", require("./routes"));


mongoose.connect(DB_URL)
.then(() => {
    console.log("DB connected");
    startServer();
})
.catch((error) => {
    console.log(error.message);
})



function startServer()
{
    app.listen(PORT, (error) => {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(`Server is listening on ${PORT}...`);
        }
    });
}


