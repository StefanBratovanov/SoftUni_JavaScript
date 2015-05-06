function solve(args) {
    var regEx = /[/:-]+/g,
        currentLine = [],
        country,
        homeTeam,
        awayTeam,
        golsConceded,
        goalsScored,
        result = {},
        opps,
        opps1,
        i,
        output = {};


    for (i in args) {
        var team = args[i];
        currentLine = team.split(regEx);
        homeTeam = currentLine[0].trim();
        awayTeam = currentLine[1].trim();
        goalsScored = Number(currentLine[2]);
        goalsConceded = Number(currentLine[3]);

        //home
        if (!result[homeTeam]) {
            result[homeTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            }
        }

        result[homeTeam].goalsScored += goalsScored;
        result[homeTeam].goalsConceded += goalsConceded;
        opps = result[homeTeam].matchesPlayedWith;

        //check if awayTeam exisits in the array
        if (opps.indexOf(awayTeam) == -1) {
            result[homeTeam].matchesPlayedWith.push(awayTeam);
        }

        //away
        if (!result[awayTeam]) {
            result[awayTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            }
        }

        result[awayTeam].goalsScored += goalsConceded;
        result[awayTeam].goalsConceded += goalsScored;
        opps1 = result[awayTeam].matchesPlayedWith;

        if (opps1.indexOf(homeTeam) == -1) {
            result[awayTeam].matchesPlayedWith.push(homeTeam);
        }

    }
    
    //sort
    var teamKeys = Object.keys(result).sort();

    teamKeys.forEach(function (key) {
        output[key] = {
            goalsScored: result[key].goalsScored,
            goalsConceded: result[key].goalsConceded,
            matchesPlayedWith: result[key].matchesPlayedWith.sort()
        }

    });

    console.log(JSON.stringify(output));
}

solve(['Levski / CSKA: 0-2',
'Pavlikeni / Loko Gorna: 4-2',
'Loko Gorna / Levski: 1-4',
'Litex / Loko Gorna: 0-0',
'Beroe / Botev Plovdiv: 2-1',
'Loko Gorna / Beroe: 3-1',
'Pavlikeni / Ludogorets: 0-2',
'Loko Sofia / Litex: 0-2',
'Pavlikeni / Marek: 1-1',
'Litex / Levski: 0-0',
'Beroe / Litex: 3-2',
'Litex / Beroe: 1-0',
'Ludogorets / Litex: 3-0',
'Litex / Ludogorets: 1-0',
'CSKA / Beroe: 1-0',
'Botev Plovdiv / CSKA: 1-1',
'Ludogorets / Loko Sofia: 1-0',
'Litex / CSKA: 0-1',
'Marek / Haskovo: 0-1',
'Levski / Loko Gorna: 1-1'
])