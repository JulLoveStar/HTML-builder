const path = require("path");
const fs = require("fs");

const textPath = path.join(__dirname, "secret-folder");

fs.readdir(textPath, (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    let textPath2 = path.join(__dirname, "secret-folder", files[i]);
    fs.stat(textPath2, (err, stats) => {
      if (err) throw err;
      if (stats.isFile() == true) {
        let nameFile = path.basename(textPath2).split(".")[0];
        let extensionFile = path.extname(textPath2).split(".")[1];
        let kbSize = stats.size / 1000 + "Kb";
        console.log(nameFile + "-" + extensionFile + "-" + kbSize);
      }
    });
  }
  // console.log('В папке находятся файлы:' + files);
});
