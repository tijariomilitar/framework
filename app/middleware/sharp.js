const fs = require('fs'),
  sharp = require('sharp');
    
exports.compressImage = (file, size) => {
  const newPath = file.path.split('.')[0] + '.png';

  return sharp(file.path)
    // .resize(size)
    .toFormat('png', {pallete:true})
    .toBuffer()
    .then(data => {
      sharp.cache(false);
      fs.writeFile(newPath, data, err => {
        if(!err){
          fs.access(file.path, (err) => {
            if (!err) { fs.unlink(file.path, err => { if(err) console.log(err) }) }
          });
        } else {
          throw err;
        }
      });

      return newPath;
    });
};