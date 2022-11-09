const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
// app.use(/** ... */);

// Initialization
app.use(cookieParser());
// Session Setup
app.use(session({
  
  // It holds the secret key for session
  secret: 'JUHI_FULL_STACK',

  // Forces the session to be saved
  // back to the session store
  resave: true,

  // Forces a session that is "uninitialized"
  // to be saved to the store
  saveUninitialized: true
}))
app.get('*', (req, res) => {
  let pageVisits = []
  if (req.session.pageVisits) {
    pageVisits = req.session.pageVisits;
    pageVisits.push(req.originalUrl);
    req.session.pageVisits = pageVisits;
  } else {
    req.session.pageVisits = [req.originalUrl]
  }
  pageVisits = req.session.pageVisits;
  res.write(`<p>Currently on route: ${req.originalUrl}</p> <br>`);
  if(pageVisits.length == 1) {
    const protocol = req.protocol;
    const host = req.get('host');
    res.write(`<p>Welcome to ${protocol}://${host}<br>`);
  } else {
    res.write('<p>Previously visited pages</p>')
    let result = '';
    pageVisits.forEach(element => {
      result += `${element}<br>`
    });
    res.write(`<p style="padding-left: 30px;">${result}</p>`);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
