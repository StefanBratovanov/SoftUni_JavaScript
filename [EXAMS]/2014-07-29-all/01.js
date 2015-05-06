function solve(args) {
    var i,
        currentPrice,
        prevPrice = Number(args[0]),
        length = args.length,
        trend;

    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + prevPrice.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');

    for (i = 1; i < length; i++) {
        prevPrice = Number((Number(args[i - 1])).toFixed(2));
        currentPrice = Number((Number(args[i])).toFixed(2));
        if (currentPrice < prevPrice) {
            trend = 'down';
        } else if (currentPrice > prevPrice) {
            trend = 'up';
        } else {
            trend = 'fixed';
        }
        console.log('<tr><td>' + currentPrice.toFixed(2) + '</td><td><img src="' + trend + '.png"/></td></td>');
    }
    console.log('</table>');
}

solve(['36.333',
'36.5',
'37.019',
'35.4',
'35',
'35.001',
'36.225'
])