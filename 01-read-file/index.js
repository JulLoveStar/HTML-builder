const path = require('path')
const fs = require('fs')
// const { buffer } = require('stream/consumers')
// const { text } = require('stream/consumers')
// const text= require('./text.txt')

const textPath = path.join(__dirname, 'text.txt')
// fs.ReadStream(textPath, 'utf-8', (err, content)=>{
//     if(err){
//         throw err
//     }
//     // const data = Buffer.from(content)
//     // console.log(data.toString())
//     console.log(content)
// })

const stream = new fs.ReadStream(textPath)
stream.on('readable', ()=>{
   
    const data = stream.read()
    if(data!=null){
    console.log(data+'')}
})

