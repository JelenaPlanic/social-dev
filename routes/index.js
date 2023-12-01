const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();


router.get("/", (req, res) => { res.render("loginPage");});
router.get("/register", (req, res) => res.render("registerPage"));

router.use("/auth", require("./auth"));
router.use("/posts", verifyAuth, require("./posts")); // ko god pokusa da ide na dalje rute, baca me na login




router.use("*", (req, res) => {
    res.render("404");
})


router.use((err, req, res, next) => { // treba da ide na kraju!
    if(err)
    {
        res.render("errorPage", {err});
    }
})

module.exports = router;