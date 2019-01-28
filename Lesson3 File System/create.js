const http = require("http");
const fs = require("fs");
const port = 8888;

http.createServer((req, res) => {
    fs.appendFile("hello2.html", "<h1>Hello 2</h1>", (err) => {
        if (err) throw err;
        console.log("Saved");
    });
}).listen(port, () => {
    console.log("Server is running at " + port);
});
