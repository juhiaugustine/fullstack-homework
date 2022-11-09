const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/submit', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// POST request
app.post('/submit', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let comments = req.body.comments === '' ? 'n/a' : req.body.comments;
  let newsletter = req.body.newsletter === 'on' ? 'Yes, Sign me up for the newsletter' : 'No, Thank you';
  res.send(`Name: ${username} <br> Email: ${email} <br> Comment: ${comments} <br> Newsletter: ${newsletter}`); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
