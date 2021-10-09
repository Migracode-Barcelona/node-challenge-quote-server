const { response } = require("express");
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const lodash = require("lodash");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
const getAllQuotesFnc = (req, res) => {
  res.send(quotes);
};
const getOneQuoteFnc = (req, res) => {
  res.send(lodash.sample(quotes));
};

//`/quotes/search?term=life`
//bonus: make your search case-insensitive

const withParameterTermWord = (req, res) => {
  const search_term = req.query.term;
  if (search_term != null) {
    const search = quotes.filter(
      (q) =>
        q.quote.toLowerCase().includes(search_term.toLowerCase()) ||
        q.author.toLowerCase().includes(search_term.toLowerCase())
    );
    res.send(search);
  } else {
    res.end;
  }
};

app.get("/quotes", getAllQuotesFnc);
app.get("/quotes/random", getOneQuoteFnc);
app.get("/quotes/search", withParameterTermWord);
//app.get("/quotes/search", withParameterTermAuthor);
app.get("/one", function (req, res) {
  res.send("You asked for route /one");
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
