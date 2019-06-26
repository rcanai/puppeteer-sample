const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

module.exports = (directoryName ) => {
  try {
    if (!directoryName) {
      throw new Error('Directory Not found')
    }

    const output = fs.createWriteStream(`${directoryName}.zip`);

    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    output.on('close', () => {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    output.on('end', () => {
      console.log('Data has been drained');
    });
    archive.on('warning', (err) =>  {throw err;});
    archive.on('error',  (err) =>  {throw err;});

    archive.pipe(output);

    const files = fs.readdirSync(directoryName);
    files.forEach((f) => {
      const filePath = path.join(directoryName, f);
      archive.append(fs.createReadStream(path.join(directoryName, f)), { name: f });
      fs.unlinkSync(filePath)
    })

    fs.rmdirSync(directoryName)

    archive.finalize();
  } catch (err) {
    console.log(err);
  }
}
