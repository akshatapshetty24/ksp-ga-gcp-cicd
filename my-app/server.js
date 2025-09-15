// server.js
const http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer((req,res)=>res.end('Hello from Cloud Run!\n')).listen(PORT);
