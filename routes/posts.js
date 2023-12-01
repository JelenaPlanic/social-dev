const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("postsPage", {user: req.session.user}); // controll(user) -> izmedju parc: top(user)->nav user 
})

module.exports = router;