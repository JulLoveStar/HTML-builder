const fs = require("fs");
const path = require("path");

const textPathCopy = path.join(__dirname, "files-copy");
const textPath = path.join(__dirname, "files");

function copyDir() {

  fs.stat(textPathCopy, (err, stats) => {
    if (err) {
      fs.mkdir(textPathCopy, (err) => {
        if (err) {
          throw err;
        }
        fs.readdir(textPath,(err, files)=>{
            if (err) {
                throw err;
              }
            for(let i=0; i<files.length; i++){
                let oldFile=path.join(textPath,files[i])
                let newFile=path.join(textPathCopy,files[i])
                fs.copyFile(oldFile,newFile,(err)=>{
                    if(err) throw err;
                })  
            }
            
        })
      });
    }else{console.log('папка уже существует')}
  });
}

copyDir();
