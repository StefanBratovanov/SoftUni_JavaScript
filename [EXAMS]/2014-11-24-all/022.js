function solve(input) {
    var lowerCaseInput = [],
        booleanSet = [],
        output = '';

    for (var row = 0; row < input.length; row++) {
        booleanSet.push([]);
        for (var col = 0; col < input[row].length; col++) {
            booleanSet[row].push(true);
        }
    }
    input.forEach(function (elem) {
        lowerCaseInput.push(elem.toLowerCase().split(''));
    });
    console.log(lowerCaseInput);

    for (row = 0; row < lowerCaseInput.length - 2; row++) {
        for (col = 1; col < lowerCaseInput[row].length; col++) {
            var charToCheck = lowerCaseInput[row][col];
            var isPlus =
                lowerCaseInput[row + 1][col - 1] === charToCheck &&
                lowerCaseInput[row + 1][col] === charToCheck &&
                lowerCaseInput[row + 1][col + 1] === charToCheck &&
                lowerCaseInput[row + 2][col] === charToCheck;
            if (isPlus) {
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
}

solve(['@S@a@p@una',
'p@@@@@@@@dna',
'@6@t@*@*eGo',
'vDig*****ne6',
'li??^*^*']);