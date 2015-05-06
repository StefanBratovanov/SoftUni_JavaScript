function solve(args) {
    var regex = /([^=&?]+)=([^=&?]+)/g,
        whitespaceRegex = /(\+|%20)+/g,
        lineIndex,
        currLine,
        lineObject,
        match,
        key,
        value,
        output,
        i;

    for (lineIndex in args) {
        currLine = args[lineIndex];
        lineObject = {};

        match = regex.exec(currLine);

        while (match) {
            key = match[1].replace(whitespaceRegex, ' ').trim();    //trim
            value = match[2].replace(whitespaceRegex, ' ').trim(); //trim

            if (!lineObject[key]) {
                lineObject[key] = [];
            }
            lineObject[key].push(value);

            match = regex.exec(currLine);

        }

        output = '';

        for (i in lineObject) {
            output += i + '=[' + lineObject[i].join(', ') + ']';
        }
        console.log(output);
    }
}


solve(['foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);