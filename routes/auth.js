const { Router } = require("express");
const router = Router();

router.get("/logout", require("../controllers/auth/logout"));

router.post("/register", require("../controllers/auth/registerUser"));
router.post("/login", require("../controllers/auth/loginUser"));


module.exports = router;