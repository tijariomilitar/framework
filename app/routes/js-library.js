const router = require("express").Router();

router.get("/date", (req, res) => { res.render("documentation/js-library/date"); });
router.get("/math", (req, res) => { res.render("documentation/js-library/math"); });

module.exports = router;