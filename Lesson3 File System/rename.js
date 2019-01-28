const http = require("http");
const fs = require("fs");
const port = 8888;

http.createServer((req, res) => {
    fs.rename("hello.txt", "hello2.txt", (err) => {
        console.log("Renamed");
    });
}).listen(port, () => {
    console.log("Server is running at " + port);
});