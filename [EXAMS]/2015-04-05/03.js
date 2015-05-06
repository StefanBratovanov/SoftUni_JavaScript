function solve(arguments) {
    var directions = [],
        output = {},
        matrix = [],
        startRow = 0,
        startCol = 0,
        cellsPassed = [];


    directions = arguments[0].split(', ');

    arguments.shift();

    arguments.forEach(function (elem) {
        matrix.push(elem.split(', '));
    });





    directions.forEach(function (direction) {

        if (direction === 'up') {
            output = {
                "&amp": checkUp('/{&}/', startRow, startCol, matrix),
                "*": checkUp('/{\*}/', startRow, startCol, matrix),
                "#": checkUp('/{#}/', startRow, startCol, matrix),
                "!": checkUp('/{!}/', startRow, startCol, matrix),
                "walls hits": 0
            }
            startRow += 1;
        } else if (direction === 'down') {
            output = {
                "&amp": checkDown('/{&}/', startRow, startCol, matrix),
                "*": checkDown('/{\*}/', startRow, startCol, matrix),
                "#": checkDown('/{#}/', startRow, startCol, matrix),
                "!": checkDown('/{!}/', startRow, startCol, matrix),
                "walls hits": 0
            }
            startRow -= 1;
        } else if (direction === 'left') {
            output = {
                "&amp": checkLeft('/{&}/', startRow, startCol, matrix),
                "*": checkLeft('/{\*}/', startRow, startCol, matrix),
                "#": checkLeft('/{#}/', startRow, startCol, matrix),
                "!": checkLeft('/{!}/', startRow, startCol, matrix),
                "walls hits": 0
            }
            startCol -= 1;
        } else if (direction === 'right') {
            output = {
                "&amp": checkRight('/{&}/', startRow, startCol, matrix),
                "*": checkRight('/{\*}/', startRow, startCol, matrix),
                "#": checkRight('/{#}/', startRow, startCol, matrix),
                "!": checkRight('/{!}/', startRow, startCol, matrix),
                "walls hits": 0
            }
            startCol += 1;
        }
    });
    console.log(JSON.stringify(output));


}

function checkUp(symbol, positionR, positionC, matrix) {
    var count = 0;
    if (matrix[positionR - 1] < 1) {
       output['walls hits'] = output['walls hits'] + 1
    }
    if (matrix[positionR - 1][positionC].indexOf(symbol) !== -1) {
        count++;
    }
    matrix[positionR - 1][positionC].replace(symbol, "@")
    return count;
}


function checkDown(symbol, positionR, positionC, matrix) {
    var count = 0;
    if (matrix[positionR + 1][positionC].indexOf(symbol) !== -1) {
        count++;
    }
    matrix[positionR + 1][positionC].replace(symbol, "@")
    return count;
}

function checkLeft(symbol, positionR, positionC, matrix) {
    var count = 0;
    if (matrix[positionR][positionC - 1].indexOf(symbol) !== -1) {
        count++;
    }
    matrix[positionR][positionC - 1].replace(symbol, "@")
    return count;
}

function checkRight(symbol, positionR, positionC, matrix) {
    var count = 0;
    if (matrix[positionR][positionC + 1].indexOf(symbol) !== -1) {
        count++;
    }
    matrix[positionR][positionC + 1].replace(symbol, "@")
    return count;
}


//    function checkI() {
//        var count = 0;
//        for (var row = 0; row < matrix.length; row++) {
//            for (var col = 0; col < matrix[row].length; col++) {
//                if (row <= matrix.length - 4) {
//                    charToCheck = matrix[row][col];
//                    if (matrix[row + 1][col] === charToCheck &&
//                        matrix[row + 2][col] === charToCheck &&
//                        matrix[row + 3][col] === charToCheck &&
//                        charToCheck === 'o') {
//                        count++;
//                    }
//                }
//            }
//        }
//        return count;
//    }



solve(['right, up, up, down', 'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj', 'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip', 'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'])