function solve(arguments) {
    var startIndex,
        matrix = [],
        charToMatch,
        charToCheck;

    arguments.forEach(function (elem) {
        matrix.push(elem.split(''));
    });

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            charToMatch = matrix[row][col];
            if (charToMatch === 'o') {
                var startRow = row;
                var startCol = col;
            }
        }
    }

    for (var row = startRow, col = startCol; row < matrix.length; row++, col += calcWind(matrix[row])) {
        charToCheck = matrix[row][col];
        //        console.log(charToCheck);
        if (charToCheck === '~') {
            console.log("Drowned in the water like a cat!");
            console.log(row + " " + col);
            break;
        }
        if ((charToCheck === '/') || (charToCheck === '\\') || (charToCheck === '|')) {
            console.log('Got smacked on the rock like a dog!');
            console.log(row + " " + col);
            break;
        }
        if ((charToCheck === '_')) {
            console.log("Landed on the ground like a boss!");
            console.log(row + " " + col);
            break;
        }
    }

    function calcWind(arguments) {
        var number = 0;
        for (i in arguments) {
            if (arguments[i] === '>') {
                number++;
            } else if (arguments[i] === '<') {
                number--;
            }
        }
        return number;
    }
}

solve(['-------------o-<<--------',
       '-------->>>>>------------',
       '---------------->-<---<--',
       '------<<<<<-------/\\--<--',
       '--------------<--/-<\\----',
       '>>--------/\\----/<-<-\\---',
       '---------/<-\\--/------\\--',
       '<-------/----\\/--------\\-',
       '\\------/--------------<-\\',
       '-\\___~/------<-----------'
      ]);