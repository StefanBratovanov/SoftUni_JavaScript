function solve(input) {
    var booleanSet = [],
        output = '';
    for (var row = 0; row < input.length; row++) {
        booleanSet.push([]);
        for (var col = 0; col < input[row].length; col++) {
            booleanSet[row].push(true);
        }
    }

    
    for (row = 0; row < input.length; row++) {
        for (col = 0; col < input[row].length; col++) {
            if ((row + 2 < input.length) &&
                (col - 1 >= 0) &&
                (col + 1 < input[row + 1].length) &&
                isPlus(input, row, col)) {
                booleanSet[row][col] = false;
                booleanSet[row + 1][col - 1] = false;
                booleanSet[row + 1][col] = false;
                booleanSet[row + 1][col + 1] = false;
                booleanSet[row + 2][col] = false;
            }
        }
    }
    for (row = 0; row < input.length; row++) {
        for (col = 0; col < input[row].length; col++) {
            if (booleanSet[row][col] === true) {
                output += input[row][col];
            }
        }
        output += '\n';
    }

    console.log(output);

    function isPlus(input, row, col) {
        var charToCheck = input[row][col].toLowerCase();
        
        if (input[row + 1][col - 1].toLowerCase() === charToCheck &&
            input[row + 1][col].toLowerCase() === charToCheck &&
            input[row + 1][col + 1].toLowerCase() === charToCheck &&
            input[row + 2][col].toLowerCase() === charToCheck) {
            return true;
        }
    }
}



solve(['@s@a@p@una',
'p@@@@@@@@dna',
'@6@t@*@*ego',
'vdig*****ne6',
'li??^*^*'
])