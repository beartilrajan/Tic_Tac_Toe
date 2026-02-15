let board = ['', '', '', '', '', '', '', '',''];
let currentplayer = 'X';
currentplayer = currentplayer === 'X' ? 'O' : "X";

const winningPattern = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 5], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function checkWinner{
    for (let combo of winningPattern) {
        const [a, b, c] = combo;
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a];
        }
    }
    return null;
}

checkWinner();