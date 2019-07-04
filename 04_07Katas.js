//Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'rock') {
    return 'Player 2 won!';
  } else if (p2 === 'scissors' && p1 === 'paper') {
    return 'Player 2 won!';
  } else if (p2 === 'scissors' && p1 === 'rock') {
    return 'Player 1 won!';
  } else if (p2 === 'paper' && p1 === 'rock') {
    return 'Player 2 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else {
    return 'Draw!';
  }
};
//or
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
//or
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}
//or
const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};
//or
function rps(p1, p2) {
  var choices = ['rock', 'paper', 'scissors'];
  var x = choices.indexOf(p1);
  var y = choices.indexOf(p2);

  if (x === y) return 'Draw!';
  if (x === 0 && y === 2) return 'Player 1 won!';
  if (x === 2 && y === 0) return 'Player 2 won!';
  if (x > y) return 'Player 1 won!'
  else return 'Player 2 won!';
}
//or
// Makes the game extensible (in case we need lizards and spock later)
const hands = {
  "rock": "paper",
  "scissors": "rock",
  "paper": "scissors"
}

//use a rest param for the players,so I can use indexOf to "find" a winner, rather than logic-out a winner

const rps = (...players) => {
  let result = "Draw!"

  //don't do anything if there's a draw
  if (players[0] !== players[1]) {
    let winner;

    for (let hand in hands) {
      // winner logic: the "hand" was played in the players, and we **don't** have the thing that could beat it
      if (players.indexOf(hand) !== -1 && players.indexOf(hands[hand]) == -1) winner = players.indexOf(hand)
    }

    result = `Player ${winner+1} won!`
  }
  return result;
};