const http = require("http");
const app = require("./app");
console.log("server.js");
http.createServer(app).listen(process.env.PORT);
