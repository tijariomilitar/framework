const router = require("express").Router();
const multer = require('./../middleware/multer');
const sharp = require('./../middleware/sharp');
const fs = require('fs');
const stream = require('stream');


router.get("/zoom", (req, res) => { res.render("documentation/image/zoom"); });

router.get("/convert", (req, res) => { res.render("documentation/image/convert"); });

router.post("/convert", multer.single('image'), (req, res) => {
    if (req.file) {
        sharp.compressImage(req.file)
            .then(newPath => {
                return res.send({ done: "A imagem foi processada com sucesso!", image: req.file.filename });
             })
            .catch(err => {
            	console.log(err);
    			return res.send({ msg: 'Houve erro no upload!' });
            });
    }
});

router.get('/convert/download/:url', (req, res) => {
    let data = fs.readFileSync('public/images/download/'+ req.params.url.split('.')[0] + '.png');
    let fileContents = Buffer.from(data, "base64");
  
    let readStream = new stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', 'attachment; filename=' + req.params.url.split('.')[0] + '.png');
    res.set('Content-Type', 'text/plain');

    fs.access('public/images/download/'+ req.params.url.split('.')[0] + '.png', (err) => {
        if (!err) { fs.unlink('public/images/download/'+ req.params.url.split('.')[0] + '.png', err => { if(err) console.log(err) }) }
    });

    readStream.pipe(res);
});

module.exports = router;