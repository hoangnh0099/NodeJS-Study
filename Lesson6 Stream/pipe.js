var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream("./input.txt");

// Create a writable stream
var writterStream = fs.createWriteStream("./output.txt");

// Pipe the read and write operations
// Read input.txt and write data to output.txt
readerStream.pipe(writterStream);
console.log("Program Ended");