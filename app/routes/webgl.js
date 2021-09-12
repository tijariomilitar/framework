const router = require("express").Router();

router.get("/", (req, res) => { res.render("documentation/webgl/index"); });

module.exports = router;