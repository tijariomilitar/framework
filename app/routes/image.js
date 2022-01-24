const router = require("express").Router();
const multer = require('./../middleware/multer');
const sharp = require('./../middleware/sharp');
const download = require('download');

router.get("/zoom", (req, res) => { res.render("documentation/image/zoom"); });

router.get("/convert", (req, res) => { res.render("documentation/image/convert"); });

router.post("/convert", multer.single('image'), (req, res) => {
    if (req.file) {
        sharp.compressImage(req.file)
            .then(newPath => {
                return res.send({ done: "A imagem foi processada com sucesso!", imagePath: newPath });
             })
            .catch(err => {
            	console.log(err);
    			return res.send({ msg: 'Houve erro no upload!' });
            });
    }
});

router.post('/convert/download/', (req, res) => {
    console.log(req.body.url);
    return res.download(req.body.url);
});

module.exports = router;