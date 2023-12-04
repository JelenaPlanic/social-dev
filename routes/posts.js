const { Router } = require("express");
const renderPostPage = require("../controllers/post/renderPostPage");
const router = Router();

router.get("/", renderPostPage);



module.exports = router;