const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });

  const server = http.createServer((req, res) => { //request and response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: blue ">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.write('<h2 This works! </h2>');
    res.write('<p>Response and Request</p>');
    res.write('<p>How many weeks of class do we have left?</p>');
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
  });

