const http = require("http");
const fs = require("fs");
const port = 8888;

http.createServer((req, res) => {
    fs.writeFile("hello.txt", "Hello", (err) => {
        console.log("Write completed");
    });
}).listen(port, () => {
    console.log("Server is running at " + port);
});
