const http = require('http');


const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  hello, world! 
</body>
</html>`

const server = http.createServer((req, res) => { res.end(html); });

server.listen('9527', () => {
  console.log('listen on 9527')
})