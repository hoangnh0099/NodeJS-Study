const http = require("http");
const fs = require("fs");
const port = 8888;

http.createServer((req, res) => {
    fs.unlink("hello.txt", (err) => {
        console.log("Deleted");
    })
}).listen(port, () => {
    console.log("Server is running at " + port);
});