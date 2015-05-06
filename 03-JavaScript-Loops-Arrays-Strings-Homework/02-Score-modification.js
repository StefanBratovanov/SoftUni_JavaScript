function scoresModification(scores) {
    var modifiedScores = scores.filter(checkValidScores),
        decreasedScores = [];

    function checkValidScores(arguments) {
        if (arguments >= 0 && arguments <= 400) {
            return arguments;
        }
    }
    modifiedScores.sort(function (a, b) {
        return a > b;
    })
    decreasedScores = modifiedScores.map(function(arguments) {
        return arguments - arguments * 0.2;
    })

    console.log(decreasedScores);
}

scoresModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);
scoresModification([100, 200, 300, 400]);