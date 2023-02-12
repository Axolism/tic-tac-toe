// game variables
let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let gameOver = false;

// DOM elements
const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');

// add event listeners to squares
squares.forEach(square => square.addEventListener('click', handleMove));

// function to handle player move
function handleMove(event) {
  const square = event.target;
  const index = square.id;

  if (board[index] === '' && !gameOver) {
    board[index] = player;
    square.innerText = player;

    checkWin();
    switchPlayer();
  }
}

// function to switch player
function switchPlayer() {
  player = player === 'X' ? 'O' : 'X';
}

// function to check for a win
function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];

    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      gameOver = true;
      message.innerText = `Player ${player} wins!`;
      return;
    }
  }

  if (board.every(square => square !== '')) {
    gameOver = true;
    message.innerText = 'Tie game.';
  }
}
