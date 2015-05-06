function solve(arguments) {
    var i,
        currentLine,
        items,
        name,
        luggName,
        isFood,
        isDrink,
        isFragile,
        weightKg,
        transferredWith,
        sortCriteria = arguments[arguments.length - 1],
        luggType,
        resultObj = {};

    for (i = 0; i < arguments.length - 1; i++) {
        currentLine = arguments[i];
        items = currentLine.split(/\.{0,}\*\.{0,}/g);
        name = items[0];
        luggName = items[1];
        isFood = items[2];
        isDrink = items[3];
        isFragile = items[4];
        weightKg = Number(items[5]);
        transferredWith = items[6];

        if (isFragile === 'true') {
            isFragile = true;
        } else isFragile = false;

        if (!resultObj[name]) {
            resultObj[name] = {};
        }

        resultObj[name][luggName] = {
            kg: weightKg,
            fragile: isFragile,
            type: 'other',
            transferredWith: transferredWith
        }
        if (isFood === 'true') {
            resultObj[name][luggName].type = 'food';
        } else if (isDrink === 'true') {
            resultObj[name][luggName].type = 'drink';
        }
    }

    if (sortCriteria === 'strict') {
        console.log(JSON.stringify(resultObj));

    } else if (sortCriteria === 'luggage name') {
        var luggSort = {};

        Object.keys(resultObj).forEach(function (key) {
            luggSort[key] = {};
            //            var values = resultObj[key];
            //            console.log(values);
            var innerKeys = Object.keys(resultObj[key]);
            var sortedInnerKeys = innerKeys.sort();

            sortedInnerKeys.forEach(function (innerKey) {
                luggSort[key][innerKey] = resultObj[key][innerKey];
            });
        });
        console.log(JSON.stringify(luggSort));

    } else if (sortCriteria === 'weight') {
        var weightSort = {};

        Object.keys(resultObj).forEach(function (key) {
            weightSort[key] = {};

            var sortedInnerByKgs = Object.keys(resultObj[key]).sort(function (a, b) {
                return resultObj[key][a].kg - resultObj[key][b].kg;
            });
            sortedInnerByKgs.forEach(function (innerKey) {
                weightSort[key][innerKey] = resultObj[key][innerKey];
            });
        });
        console.log(JSON.stringify(weightSort));
    }
}

solve(['Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
       'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
       'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
       'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
       'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
       'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
       'weight'
      ]);

/*  {"Yana Slavcheva":
          {"clothes":{"kg":2.2,"fragile":false,"type":"other","transferredWith":"backpack"}},
"Kiko":
        {"socks":{"kg":0.2,"fragile":false,"type":"other","transferredWith":"backpack"},
        "banana":{"kg":3.2,"fragile":false,"type":"food","transferredWith":"backpack"},
        "sticks":{"kg":1.6,"fragile":false,"type":"other","transferredWith":"ATV"},
        "glasses":{"kg":3,"fragile":true,"type":"other","transferredWith":"ATV"}},
"Manov":
          {"socks":{"kg":0.3,"fragile":false,"type":"other","transferredWith":"ATV"}}}*/