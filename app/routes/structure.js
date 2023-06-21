const router = require("express").Router();

router.get("/container", (req, res) => { res.render("documentation/structure/container"); });
router.get("/box", (req, res) => { res.render("documentation/structure/box"); });
router.get("/position", (req, res) => { res.render("documentation/structure/position"); });
router.get("/responsive", (req, res) => { res.render("documentation/structure/responsive"); });
router.get("/carousel", (req, res) => { res.render("documentation/structure/carousel"); });
router.get("/confirm", (req, res) => { res.render("documentation/structure/confirm/index"); });
router.get("/message", (req, res) => { res.render("documentation/structure/message/index"); });

module.exports = router;