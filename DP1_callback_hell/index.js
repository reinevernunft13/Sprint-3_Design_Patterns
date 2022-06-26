// Read and reverse contents of text files in a directory.

const {
    readdir,
    readFile,
    writeFile
  } = require("fs/promises");

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

    async function readAndreverse () {
        try {
          const files = await readdir(inbox);
          for (const file of files) {
            const data = await readFile(join(inbox, file), "utf8");
            await writeFile(join(outbox, file), reverseText(data));
            console.log(`Success! The contents of your original file ${file} located in the 'inbox folder' are now reversed and have been saved to the 'outbox folder'!`);
          }
        } catch(err){
          console.error(err);
        }
      }
      readAndreverse();


