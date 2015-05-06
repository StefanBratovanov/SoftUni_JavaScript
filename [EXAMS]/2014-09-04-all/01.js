function solve(arguments) {
    var bill = arguments[0],
        mood = arguments[1],
        baseTip,
        totalTip,
        firsrDigit;

    switch (mood) {
    case 'happy':
        totalTip = 0.1 * bill;
        break;
    case 'married':
        totalTip = 0.0005 * bill;
        break;
    case 'drunk':
        baseTip = 0.15 * bill;
        firsrDigit = Number(baseTip.toString()[0]);
        totalTip = Math.pow(baseTip, firsrDigit);
        break;
    default:
        totalTip = 0.05 * bill;;
    }
    console.log(totalTip.toFixed(2));
}

solve(['100.00',
'married'
])