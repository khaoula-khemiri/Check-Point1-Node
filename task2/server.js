const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
  } else {
    res.write('<h1>There is no content</h1>');
    res.end();
  }
});

server.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('Server is running on port 3000');
});