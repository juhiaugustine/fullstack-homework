const http = require('http');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );
    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  } else {
    var tableHtml = '';
    let urlString = req.url.toString();
    let queryParams = urlString.split('?').pop();
    let cssStyle = 'style="border:1px solid black;"'
    queryParams.split('&').forEach(function(queryParam){
      const values = queryParam.split('=');
      if(values.length == 2) {
        tableHtml += `<tr><td ${cssStyle} >${values[0]}</td><td ${cssStyle}>${values[1]}</td></tr>`
      }
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<table ${cssStyle}> ${tableHtml} </table>`);
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
