function solve(arguments) {
    var numberOfTurns = Number(arguments[4]),
        initialCoords = arguments[3].split(' '),
        starOneName,
        starOneX,
        starOneY,
        starTwoName,
        starTwoX,
        starTwoY,
        starThreeName,
        starThreeX,
        starThreeY,
        shipX,
        shipY;

    starOneName = getNameSt(arguments[0]);
    starTwoName = getNameSt(arguments[1]);
    starThreeName = getNameSt(arguments[2]);
    starOneX = getX(arguments[0]);
    starOneY = getY(arguments[0]);
    starTwoX = getX(arguments[1]);
    starTwoY = getY(arguments[1]);
    starThreeX = getX(arguments[2]);
    starThreeY = getY(arguments[2]);
    shipX = Number(initialCoords[0]);
    shipY = Number(initialCoords[1]);


    for (var y = shipY, x = shipX; y < shipY + numberOfTurns + 1; y++) {
        if (checkInRangeStar(x, y, starOneX, starOneY)) {
            console.log(starOneName.toLowerCase());
        } else if (checkInRangeStar(x, y, starTwoX, starTwoY)) {
            console.log(starTwoName.toLowerCase());
        } else if (checkInRangeStar(x, y, starThreeX, starThreeY)) {
            console.log(starThreeName.toLowerCase());
        } else console.log('space');
    }

    function checkInRangeStar(x, y, starX, starY) {
        if ((x >= starX - 1 && x <= starX + 1) && (y >= starY - 1 && y <= starY + 1)) {
            return true;
        }
        return false;
    }


    function getNameSt(args) {
        var info = args.split(' ');
        var name = info[0];
        return name;
    }

    function getX(args) {
        var info = args.split(' ');
        var X = Number(info[1]);
        return X;
    }

    function getY(args) {
        var info = args.split(' ');
        var Y = Number(info[2]);
        return Y;
    }
}

solve(['Sirius 3 7',
        'Alpha-Centauri 7 5',
        'Gamma-Cygni 10 10',
        '8 1',
        '6'
]);