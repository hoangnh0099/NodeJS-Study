const fs = require("fs");
const data = "A solution of all technology";

// Create a writable stream
var writterStream = fs.createWriteStream("./output.txt");

// Write the data to stream with encoding to be UTF8
writterStream.write(data, "UTF8");

//Mark the end of file
writterStream.end();

// Handle stream events --> finish and error
writterStream.on("finish", () => {
    console.log("Write completed");
});
writterStream.on("error", (err) => {
    console.log(err.stack);
});
console.log("Program Ended");