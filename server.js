const http = require('http');
const server =http.createServer();

http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(`
  <!doctype>
  <html>
  <head>
  <title>server1</title>
  </head>
  <body>
  <h1>Preved</h1>
  </body>
  </html>
  `);
}).listen(3000, () => console.log('works'));