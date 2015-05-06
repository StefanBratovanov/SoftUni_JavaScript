function solve(args) {
    var i,
        matrix = [],
        output = {},
        charToCheck;

    args.forEach(function (elem) {
        matrix.push(elem.split(''))
    });

    output = {
        I: checkI(),
        L: checkL(),
        J: checkJ(),
        O: checkO(),
        Z: checkZ(),
        S: checkS(),
        T: checkT()
    }

    console.log(JSON.stringify(output));

    function checkI() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (row <= matrix.length - 4) {
                    charToCheck = matrix[row][col];
                    if (matrix[row + 1][col] === charToCheck &&
                        matrix[row + 2][col] === charToCheck &&
                        matrix[row + 3][col] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkL() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (row <= matrix.length - 3 &&
                    col < matrix[row].length - 1) {
                    charToCheck = matrix[row][col];
                    if (matrix[row + 1][col] === charToCheck &&
                        matrix[row + 2][col] === charToCheck &&
                        matrix[row + 2][col + 1] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkJ() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length; col++) {
                if (row <= matrix.length - 3) {
                    charToCheck = matrix[row][col];
                    if (matrix[row + 1][col] === charToCheck &&
                        matrix[row + 2][col] === charToCheck &&
                        matrix[row + 2][col - 1] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkO() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length; col++) {
                if (row <= matrix.length - 2) {
                    charToCheck = matrix[row][col];
                    if (matrix[row + 1][col] === charToCheck &&
                        matrix[row + 1][col - 1] === charToCheck &&
                        matrix[row][col - 1] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkZ() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length - 1; col++) {
                if (row <= matrix.length - 2) {
                    charToCheck = matrix[row][col];
                    if (matrix[row][col - 1] === charToCheck &&
                        matrix[row + 1][col + 1] === charToCheck &&
                        matrix[row + 1][col] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkS() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length - 1; col++) {
                if (row <= matrix.length - 2) {
                    charToCheck = matrix[row][col];
                    if (matrix[row][col + 1] === charToCheck &&
                        matrix[row + 1][col - 1] === charToCheck &&
                        matrix[row + 1][col] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function checkT() {
        var count = 0;
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length - 1; col++) {
                if (row <= matrix.length - 2) {
                    charToCheck = matrix[row][col];
                    if (matrix[row][col + 1] === charToCheck &&
                        matrix[row][col - 1] === charToCheck &&
                        matrix[row + 1][col] === charToCheck &&
                        charToCheck === 'o') {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}


solve(['--o--o-',
       '--oo-oo',
       'ooo-oo-',
       '-ooooo-',
       '---oo--',
])


// arguments.forEach(function (elem) {
//        matrix.push(elem.split(''));
//    });