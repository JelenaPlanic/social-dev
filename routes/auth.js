const { Router } = require("express");
const router = Router();

router.post("/register", require("../controllers/auth/registerUser"));


module.exports = router;