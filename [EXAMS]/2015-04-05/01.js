function solve(args) {
    var type,
        amount,
        item,
        gold = 0,
        silver = 0,
        bronze = 0,
        sum = 0;

    args.forEach(function (elem) {
        item = elem.split(/\s+/)
        type = item[0].toLowerCase().trim();
        amount = item[1].trim();

        var regEx = /\.00/;
        if (amount.match(regEx)) {
            amount = parseInt(item[1].trim());

        } else if (!(amount.match(regEx)) && amount.indexOf('.') > 0) {
            amount = parseInt('0')

        } else {
            amount = parseInt(item[1].trim());
        }

        if (amount >= 0 && type === 'coin') {
            sum += amount;
        }
    });


    gold = parseInt(sum / 100);
    silver = parseInt((sum % 100) / 10);
    bronze = sum % 10;
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);


}


solve(['coin 1.00', 'coint two', 'coin -5', 'coin 10.00', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1'])