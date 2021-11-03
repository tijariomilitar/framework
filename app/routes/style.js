const router = require("express").Router();

router.get("/color", (req, res) => { res.render("documentation/style/color"); });
router.get("/element", (req, res) => { res.render("documentation/style/element"); });

module.exports = router;