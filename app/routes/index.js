const router = require("express").Router();

router.get("/", (req, res) => { res.render("index"); });

router.use("/getting-started", require("./getting-started"));
router.use("/structure", require("./structure"));
router.use("/style", require("./style"));
router.use("/image", require("./image"));
router.use("/js-library", require("./js-library"));

module.exports = router;