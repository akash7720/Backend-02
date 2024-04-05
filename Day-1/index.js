
import fs from "fs"

// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//    });

const content = 'hello.';
// Create a new file and write content to it
fs.writeFile('awdiz.txt', content, (err) => {
 if (err) {
 console.error('Error writing file:', err);
 } else {
 console.log('File created and content written successfully.');
 }
});