const path = require('path')
const fs = require('fs')
const textPath = path.join(__dirname, 'text.txt')

let readline = require('readline'); 
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // prompt: '>'
});
const stream=fs.createWriteStream(textPath)
console.log('Hello')
rl.prompt();
rl.on('line', (input) => {
    if(input=='exit'){
    rl.close();
    }else{
        stream.write(input)
    }
});

rl.on('close',()=>{
    console.log('Good bye')
    rl.close();
})

