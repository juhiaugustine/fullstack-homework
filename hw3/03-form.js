const http = require(`http`);
const fs = require(`fs`);
const qs = require(`querystring`);
const port = process.env.PORT || 5001;
const server = http.createServer((req, res) => {
  if (req.url === '/form') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('03-form.html').pipe(res);
  } else if (req.url === '/submit') {
    var body = '';
    req.on('data', function (data) {
        body += data;
        if (body.length > 1e6)
            req.connection.destroy();
    });
    req.on('end', function () {
        const postBody = qs.parse(body);
        const username = postBody['username']
        const email = postBody['email']
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<p>Username: ${username}</p><p>Email: ${email}</p>`);
        res.end();
    });
  }
}) 

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
