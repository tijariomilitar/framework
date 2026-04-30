const router = require("express").Router();

router.get("/", (req, res) => { res.render("index"); });

router.get("/api", (req, res) => { res.render("api"); });
router.use("/getting-started", require("./getting-started"));
router.use("/structure", require("./structure"));
router.use("/style", require("./style"));
router.use("/image", require("./image"));
router.use("/js-library", require("./js-library"));
router.use("/webgl", require("./webgl"));

module.exports = router;