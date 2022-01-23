const fs = require('fs'),
  sharp = require('sharp');
    
exports.compressImage = (file, size) => {
  const newPath = file.path.split('.')[0] + '.png';

  return sharp(file.path) // Executamos o SHARP na imagem que queremos comprimir
    .resize(size) //Redimensionamos para o tamanho (se não receber esse parâmetro, não redimensiona
    .toFormat('png') // Forçamos a conversão esse arquivo para png
    .png({ // Comprimimos, setando uma qualidade
        quality: 80
    })
    .toBuffer() // Transformamos esse arquivo em um Buffer
    .then(data => {
      sharp.cache(false);
      fs.writeFile(newPath, data, err => {
          if(!err){
              fs.access(file.path, (err) => {
                  console.log(file);
                  if (!err) { fs.unlink(file.path, err => { if(err) console.log(err) }) }
              });
          } else {
              throw err;
          }
      });

      console.log(newPath);

      return newPath;
    })
}