function solve(arguments) {
    var directions = [],
        output = {},
        matrix = [],
        startRow = 0,
        startCol = 0,
        cellsPassed = [],
        tempRow = 0,
        tempCol = 0,
        cellToChek;


    directions = arguments[0].split(', ');

    arguments.shift();

    arguments.forEach(function (elem) {
        matrix.push(elem.split(', '));
    });

    output = {
        "&amp": 0,
        "*": 0,
        "#": 0,
        "!": 0,
        "walls hits": 0
    }

    var row = 0,
        col = 0;

    for (var i in directions) {
        var direction = directions[i];
        if (direction === 'up' && row <= 0) {
            output["walls hits"] = output["walls hits"] + 1;
        } else if(direction === 'up' && row > 0) {
            tempRow = -1;
        }

        if (direction === 'down' && row > matrix.length - 1) {
            output["walls hits"] = output["walls hits"] + 1;
        } else if(direction === 'down' && row <= matrix.length - 1){
            tempCol = -1;
        }

        if (direction === 'right' && col > matrix[row].length) {
            output["walls hits"] = output["walls hits"] + 1;
        } else if (direction === 'right' && col <= matrix[row].length){
            tempCol = 1;
        }

        if (direction === 'left' && col <= 0) {
            output["walls hits"] = output["walls hits"] + 1;
        } else if (direction === 'left' && col > 0){
            tempCol = -1;
        }

        row += tempRow;
        col += tempCol;

        if (row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length) {
            //            output["walls hits"] = output["walls hits"] + 1;

            continue;
        }

        cellToChek = matrix[row][col];

        output = {
            "&amp": checkUp('{&}', cellToChek, matrix),
            "*": checkUp('{\*}', cellToChek, matrix),
            "#": checkUp('{#}', cellToChek, matrix),
            "!": checkUp('{!}', cellToChek, matrix),
            "walls hits": 0
        }

    }


    console.log(output);


    function checkUp(symbol, cellToChek, matrix) {
        var count = 0;

        if (cellToChek.indexOf(symbol) !== -1) {
            count++;
        }
        cellToChek.replace(symbol, "@")
        return count;
    }
}

solve(['right, up, up, down', 'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj', 'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip', 'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'])

