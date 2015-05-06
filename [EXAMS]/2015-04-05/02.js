function solve(args) {
    var numberOfJumps = parseInt(args[0]);
    var lenghtTrack = parseInt(args[1]),
        i,
        j,
        player,
        name,
        jumpDistance,
        fleaSymbol,
        winner,
        startPosition = 0,
        dots = [],
        conditionTrack = '',
        whinnerFound = false;


    args.shift();
    args.shift();

    for (var row = 0; row < args.length; row++) {
        dots.push([]);
        for (var col = 0; col < lenghtTrack; col++) {
            dots[row].push('.');
        }
    }

    for (i in args) {
        player = args[i].split(/[,\s]+/);
        name = player[0];
        jumpDistance = parseInt(player[1]);
        fleaSymbol = name.substring(0, 1).toUpperCase();


        for (var i = 0; i < numberOfJumps; i++) {
            if (startPosition + jumpDistance < lenghtTrack) {
                for (var i = 0; i < jumpDistance; i++) {
                    conditionTrack += '.'
                }
                conditionTrack += fleaSymbol;
                startPosition += jumpDistance
            }

        console.log(conditionTrack);
        conditionTrack = '';

        }
    }





}

solve(['10', '19', 'angel ,9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7'])