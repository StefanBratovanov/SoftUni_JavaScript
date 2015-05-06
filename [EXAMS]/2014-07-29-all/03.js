function solve(args) {
    var regEx = /-?\d+(\.\d{1,})?|-/g,
        i,
        currentLine,
        sum = 0,
        maxSum = Number.NEGATIVE_INFINITY,
        matches = [],
        maxLine,
        j,
        val1,
        val2,
        val3,
        valueArray = [],
        bigestLineArray = [];

        maxLine = args[2];
    for (i = 2; i < args.length - 1; i++) {
        currentLine = args[i];
        matches = currentLine.match(regEx);
//        console.log(matches);
        for (index in matches) {
            if (matches[index] === '-') {
                sum += 0;
            } else {
                sum += Number(matches[index]);
            }
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxLine = currentLine;
        }
        sum = 0;
    }

    bigestLineArray = maxLine.match(/-?\d+(\.\d{1,})?/g);

    if (bigestLineArray === null) {
        console.log('no data');
    } else {
        console.log(maxSum + ' = ' + bigestLineArray.join(' + '));
    }
}

solve(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
'<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
'</table>'
])
