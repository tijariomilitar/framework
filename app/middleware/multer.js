const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/images/download');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    }),

    fileFilter: (req, file, cb) => {
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg', , 'image/webp'].find( formatoAceito => formatoAceito == file.mimetype );

        if(isAccepted){ return cb(null, true); }
        
        return cb(null, false);
    }
}));