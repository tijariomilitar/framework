const router = require("express").Router();
// const lib = require('jarmlib');

router.get("/zoom", (req, res) => { res.render("documentation/image/zoom"); });

module.exports = router;