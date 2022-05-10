const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/pokemon', (req, res) => {
  var rawdata = fs.readFileSync('pokemon.json');
  var pokemon = [];
  var pokemon2 = JSON.parse(rawdata);
  var randomNum = Math.round(Math.random() * pokemon2.length);
  pokemon.push(pokemon2[randomNum]);
  var randomMove = [];
  var moveCount = [];
  for(i=0; i<4; i++){
    randomMove.push(pokemon[0].level_up_moves[Math.round(Math.random() * pokemon[0].level_up_moves.length)]);
    for(x=-1; x < moveCount.length;x++){
      while(randomMove[i] === randomMove[x] || randomMove[i] === undefined){
        randomMove.splice(-1, 1);
        randomMove.push(pokemon[0].level_up_moves[Math.round(Math.random() * pokemon[0].level_up_moves.length)]);
      }
    }
    moveCount.push(i);
  }
  randomMove.unshift(pokemon[0].name);
  console.log(pokemon[0].name);
  res.json({pokemon,
            randomMove});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);