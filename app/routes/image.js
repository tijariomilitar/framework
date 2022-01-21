const router = require("express").Router();
const multer = require('./../middleware/multer');
const sharp = require('./../middleware/sharp');

router.get("/zoom", (req, res) => { res.render("documentation/image/zoom"); });

router.get("/convert", (req, res) => { res.render("documentation/image/convert"); });

router.post("/convert", multer.single('image'), (req, res) => {
    if (req.file) {
         sharp.compressImage(req.file, 80)
            .then(newPath => {
                return res.send({ msg: "A imagem foi processada com sucesso!", imagePath: newPath });
             })
            .catch(err => {
            	console.log(err);
    			return res.send('Houve erro no upload!');
            } );
    }
});

router.get('/convert/donwload', (req, res) => {
    console.log(req.body);

    let filePath = newPath;
    let fileName = req.file.originalname;

    res.download(filePath, fileName);
})

module.exports = router;