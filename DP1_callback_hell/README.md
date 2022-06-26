## CALLBACK HELL 
Callback hell -- a.k.a 'pyramid of doom' -- is an anti-pattern seen in asynchronous programming: it describes an unwieldy amount of nested callback functions forming a pyramid. 

**Exercise**
The code reads and reverses contents of text files in a directory.
Find a fix for the code below, replacing the callback hell with a better
solution.

const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
});

**Solution**
-An inbox and outbox folder were created to test the code. 
-The callback hell has been replaced with async/await syntax.

**Instructions**
To run this program, do:

1. 
`npm install`
2. 
`node index.js`



