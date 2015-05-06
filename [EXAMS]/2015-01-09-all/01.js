function solve(arguments) {
    var i,
        currentData = [],
        car,
        fuel,
        route,
        luggageWeight,
        consumptionPer100,
        totalConsumption;

    for (i in arguments) {
        currentData = arguments[i].split(' ');
        car = currentData[0];
        fuel = currentData[1];
        route = currentData[2];
        luggageWeight = Number(currentData[3]);

        switch (fuel) {
        case 'petrol':
            consumptionPer100 = 10 + 0.01 * luggageWeight;
            break;
        case 'diesel':
            consumptionPer100 = 0.8 * 10 + 0.01 * luggageWeight;
            break;
        case 'gas':
            consumptionPer100 = 1.2 * 10 + 0.01 * luggageWeight;
            break;
        }

        switch (route) {
        case '1':
            totalConsumption = 110 * consumptionPer100 / 100 + 0.3 * consumptionPer100 * 10 / 100;
            break;

        case '2':
            totalConsumption = 95 * consumptionPer100 / 100 + 0.3 * consumptionPer100 * 30 / 100;
            break;
        }
        console.log(car + ' ' + fuel + ' ' + route + ' ' + Math.round(totalConsumption));
    }
}
solve(['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']);