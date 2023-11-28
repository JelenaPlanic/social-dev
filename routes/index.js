const { Router } = require("express");
const router = Router();


router.get("/", (req, res) => { res.render("loginPage");});
router.get("/register", (req, res) => res.render("registerPage"));

router.use("/auth", require("./auth"));



module.exports = router;