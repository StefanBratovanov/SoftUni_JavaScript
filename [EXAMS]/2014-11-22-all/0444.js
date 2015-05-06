function solve(arguments) {
    var result = {},
        i,
        tokens,
        color,
        property,
        value,
        output = {},
        rank,
        sortedColors;

    for (i in arguments) {
        tokens = arguments[i].split('|');
        color = tokens[0];
        property = tokens[1];
        value = tokens[2];

        if (!result[color]) {
            result[color] = {
                opponents: [],
                wins: 0,
                losses: 0
            };
        }

        switch (property) {
        case 'age':
            result[color].age = value;
            break;
        case 'name':
            result[color].name = value;
            break;
        case 'win':
            result[color].wins++;
            result[color].opponents.push(value);
            break;
        case 'loss':
            result[color].losses++;
            result[color].opponents.push(value);
            break;
        }
    }

    sortedColors = Object.keys(result).sort();
    
    for (i in sortedColors) {
        var sortColor = sortedColors[i];
        if (!result[sortColor].name || !result[sortColor].age) {
            continue;
        }

        rank = ((result[sortColor].wins + 1) / (result[sortColor].losses + 1)).toFixed(2);
        output[sortColor] = {
            age: result[sortColor].age,
            name: result[sortColor].name,
            opponents: result[sortColor].opponents.sort(),
            rank: rank
        }
    }

    console.log(JSON.stringify(output));
}


solve(['purple|age|99',
        'red|age|44',
        'blue|win|pesho',
        'blue|win|mariya',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Yana',
        'purple|loss|Yana',
        'purple|loss|Manov',
        'purple|loss|Manov',
        'red|name|gosho',
        'blue|win|Vladko',
        'purple|loss|Yana',
        'purple|name|VladoKaramfilov',
        'blue|age|21',
        'blue|loss|Pesho'])