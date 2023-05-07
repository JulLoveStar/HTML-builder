const path = require('path')
const fs = require('fs')

const textPath = path.join(__dirname, 'text.txt')

const stream = new fs.ReadStream(textPath)
stream.on('readable', ()=>{
   
    const data = stream.read()
    if(data!=null){
    console.log(data+'')}
})

