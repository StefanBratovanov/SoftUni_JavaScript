function solve(input) {
    var regEx = /([^=&?]+)=([^=&?]+)/g,
        whitespaceReg = /(\+|%20)+/g,
        index,
        currentLine,
        outputObject,
        match,
        key,
        value,
        output;

    for (index in input) {
        currentLine = input[index];
        outputObject = {};
        match = regEx.exec(currentLine);

        while (match) {
            key = match[1].replace(whitespaceReg, ' ').trim();
            value = match[2].replace(whitespaceReg, ' ').trim();

            if (!outputObject[key]) {
                outputObject[key] = [];
            }
            outputObject[key].push(value);

            match = regEx.exec(currentLine);
        }
//        console.log(outputObject);
        output = '';
        for (var keyInd in outputObject) {
            output += keyInd + '=[' + outputObject[keyInd].join(', ') + ']';
        }
        console.log(output);
    }
}

solve(['foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);