const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/pokemon', (req, res) => {
  var rawdata = fs.readFileSync('pokemon.json');
  var pokemon = [];
  var pokemon2 = JSON.parse(rawdata);
  var randomNum = Math.round(Math.random() * pokemon2.length);
  pokemon.push(pokemon2[randomNum]);
  res.json(pokemon);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);