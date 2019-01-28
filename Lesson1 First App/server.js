const http = require("http");
const port = 8888;

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World");
}).listen(port, () => {
    console.log("Server is running at " + port);
});