let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (let combo of winningPattern) {
        const [a, b, c] = combo;

        if (
            board[a] !== '' &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            gameOver = true;
            return board[a]; // X or O
        }
    }

    // Draw condition
    if (!board.includes('')) {
        gameOver = true;
        return 'Draw';
    }

    return null;
}

function move(index) {
    if (board[index] !== '' || gameOver) return;

    board[index] = currentPlayer;
    renderBoard();

    const result = checkWinner();

    if (result === 'Draw') {
        alert("It's a Draw!");
        return;
    }

    if (result) {
        alert(`${result} wins!`);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function renderBoard() {
    const buttons = document.querySelectorAll(".Game button");
    buttons.forEach((button, index) => {
        button.textContent = board[index];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
}

renderBoard();
