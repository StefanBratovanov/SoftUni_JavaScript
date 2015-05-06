function solve(args) {
    var currentLine,
        i,
        band,
        city,
        date,
        venue,
        result = {};

    for (i in args) {
        currentLine = args[i].split("|");
        band = currentLine[0].trim();
        city = currentLine[1].trim();
        date = currentLine[2].trim();
        venue = currentLine[3].trim();

        if (!result[city]) {
            result[city] = {}
        }
        if (!result[city][venue]) {
            result[city][venue] = [];
            result[city][venue].push(band);
        } else {
            if (result[city][venue].indexOf(band) < 0) {
                result[city][venue].push(band);
            }
        }
    }

    //    sort
    var output = {};
  var sortedTowns = Object.keys(result).sort();
//
//    for (var i in sortedTowns) {
//        var town = sortedTowns[i];
//
//        output[town] = {}
//        var sortedStads = Object.keys(result[town]).sort();
//
//        for (j in sortedStads) {
//            var stad = sortedStads[j];
//
//            output[town][stad] = result[town][stad].sort();
//        }
//    }

    sortedTowns.forEach(function (town) {
            output[town] = {}
            var sortedVenues = Object.keys(result[town]).sort();
            sortedVenues.forEach(function (venue) {
                output[town][venue] = result[town][venue].sort()
            });
        });

    console.log(JSON.stringify(output));
}


solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
'Helloween | London | 28-Jul-2014 | Wembley Stadium',
'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
'Metallica | London | 03-Oct-2014 | Olympic Stadium',
'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
])