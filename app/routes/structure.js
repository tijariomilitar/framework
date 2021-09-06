const router = require("express").Router();

router.get("/container", (req, res) => { res.render("documentation/structure/container"); });
router.get("/box", (req, res) => { res.render("documentation/structure/box"); });
router.get("/position", (req, res) => { res.render("documentation/structure/position"); });
router.get("/responsive", (req, res) => { res.render("documentation/structure/responsive"); });

module.exports = router;