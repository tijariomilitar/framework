const router = require("express").Router();

router.get("/color", (req, res) => { res.render("documentation/style/color"); });

module.exports = router;