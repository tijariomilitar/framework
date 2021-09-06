const router = require("express").Router();

router.get("/fundamentals", (req, res) => { res.render("documentation/getting-started/fundamentals"); });
router.get("/instalation", (req, res) => { res.render("documentation/getting-started/instalation"); });

module.exports = router;