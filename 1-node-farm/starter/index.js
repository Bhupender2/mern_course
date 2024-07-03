const fs= require("fs");

const textIn= fs.readFileSync("./txt/input.txt", "utf-8") // here we use readFileSync core module to read data from this file

console.log(textIn);

// to write data we need to use writeFileSync to write something inside the newly created folder


const textOut=`this is we know about avacado: ${textIn} .\ncreated on ${Date.now()}`

fs.writeFileSync("./txt/output.txt", textOut)
 
console.log("new file is created")