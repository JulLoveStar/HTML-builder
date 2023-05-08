const fs = require('fs')
const path = require('path')

const stylePath = path.join(__dirname, "styles");
const bundlePath = path.join(__dirname, "project-dist", "bundle.css");

fs.readdir(stylePath, (err, files)=>{
    let styles = []
    if (err) throw err;
    for(let i = 0; i<files.length; i++){
        const newStylePath= path.join(stylePath, files[i])
      fs.stat(newStylePath,(err,stats)=>{
        // console.log(stats.isFile())
        if (err) throw err;
        if(stats.isFile()==true){
            if(path.extname(newStylePath)=='.css'){
                fs.readFile(newStylePath, 'utf-8',(err, content)=>{
                    styles = [...content]
                    // console.log(styles)
                    fs.appendFile(bundlePath, content, (err)=>{
                        if (err) throw err;
                        // console.log('styles')
                    })
                })
                
            }
            
        }
      }) 
    }
    

})