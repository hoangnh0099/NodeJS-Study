const http = require("http");
const fs = require("fs");
const port = 8888;

http.createServer((req, res) => {
    fs.open("hello.txt", "w", (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}).listen(port, () => {
    console.log("Server is running at " + port);
});
