function startGame() {
    for (var i = 1; i <= 9; i++) {
        clearCell(i);          
    }
    document.turn = 'X';
    document.winner = null;
    setMessage(document.turn + ' starts first');
}

function setMessage(msg) {
    document.getElementById('messages').innerHTML = msg;
}

function nextMove(square) {
    if(document.winner !== null) {
        setMessage('Game Over! ' + document.winner + ' won the game!');
    } else if( square.innerHTML === '') {
        square.innerHTML = document.turn;
        switchTurn();
    }
}

function switchTurn() {
    if(checkWinner(document.turn)) {
        setMessage('Congratulations, ' + document.turn + '! You win!');
        document.winner = document.turn;
    }
    else if(document.turn === 'X') {
        document.turn = 'O';
        setMessage('It is ' + document.turn + ' turn');
    }
    else {
        document.turn = 'X';
        setMessage('It is ' + document.turn + ' turn');
    }
}

function checkWinner(mark) {
    var result = false;
    if(checkRow(1, 2, 3, mark) ||
       checkRow(4, 5, 6, mark) ||
       checkRow(7, 8, 9, mark) ||
       checkRow(1, 4, 7, mark) ||
       checkRow(2, 5, 8, mark) ||
       checkRow(3, 6, 9, mark) ||
       checkRow(1, 5, 9, mark) ||
       checkRow(3, 5, 7, mark)) {
       
       result = true;
    }
    return result;
}

function checkRow(a, b, c, mark) {
    var result = false;
    if(getCell(a) === mark && getCell(b) === mark && getCell(c) === mark) {
       result = true;
    }
    return result;
}

function getCell(number) {
    return document.getElementById('cell_' + number).innerHTML; 
}

function clearCell(number) {
    document.getElementById('cell_' + number).innerHTML = '';
}