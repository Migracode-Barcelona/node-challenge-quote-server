// const fs = require("fs");
// const quotesFile = "./quotes.json";

// const saveToJson = (quotes) => {
//   fs.writeFileSync(quotesFile, JSON.stringify(quotes, null, 4));
//   const getFromJson = () => JSON.parse(fs.readFileSync(quotesFile));
// };

// const Api = () => {
//   const saveQuote = (request, response) => {
//     const newQuote = request.body;
//     const quotes = getFromJson();

//     const sameQuote = quotes.find((q) => q.quote === newQuote.quote);
//     if (sameQuote) {
//       response.status(400).send("A Quote is already exist");
//     }
//     const maxId = Math.max(...quotes.map((q) => q.id));
//     newQuote.id = maxId + 1;
//     quotes.push(newQuote);
//     saveToJson(quotes);

//     response.status(201).send(newQuote);
//   };
// };
// module.exports = Api;
