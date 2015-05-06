function solve(arguments) {
    var dates = [],
        singleDate,
        i,
        hatersDate = parseDate('25.05.1973'),
        endDate = parseDate('01.01.2015'),
        fans = [],
        haters = [];
    for (i in arguments) {
        singleDate = parseDate(arguments[i]);
        if (singleDate > parseDate('01.01.1900') && singleDate < endDate) {
            dates.push(singleDate);
        }

    }
    fans = dates.filter(function (num) {
        return num > hatersDate;
    });

    haters = dates.filter(function (num) {
        return num < hatersDate;
    });

    fans.sort(function (a, b) {
        return a - b;
    });

    haters.sort(function (a, b) {
        return a - b;
    });



    if (dates.length === 1) {
        console.log('The biggest fan of ewoks was born on ' + (dates[0]).toDateString());
    } else if (dates.length === 0) {
        console.log('No result');
    } else {
        console.log('The biggest fan of ewoks was born on ' + (fans[0]).toDateString());
        console.log('The biggest hater of ewoks was born on ' + (haters[0]).toDateString());
    }


    function parseDate(input) {
        var parts = input.split('.');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[2], parts[1] - 1, parts[0]); // Note: months are 0-based
    }
}


solve(['22.03.2014', '17.05.1933', '10.10.1954']);







//22.03.2014
//17.05.1933
//10.10.1954