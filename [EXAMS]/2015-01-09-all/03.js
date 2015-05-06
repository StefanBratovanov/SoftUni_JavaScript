function solve(arguments) {
    var regEx = /<p>(.*?)<\/p>/g,
        regNotSmallLetter = /[^a-z0-9]+/g,
        match,
        arrayMatch = [],
        inseideP,
        replacedLetters = [],
        i,
        j,
        decryptedArray = [],
        newWord = '';

    match = regEx.exec(arguments[0]);
    while (match) {
        inseideP = match[1].replace(regNotSmallLetter, ' ').replace(/\s{1,}/, ' ');
        arrayMatch.push(inseideP);
        match = regEx.exec(arguments[0]);
    }
    for (i in arrayMatch) {
        for (j in arrayMatch[i]) {
            if ((arrayMatch[i].charCodeAt(j) >= 97) && (arrayMatch[i].charCodeAt(j)) < 110) {
                newWord += String.fromCharCode(arrayMatch[i].charCodeAt(j) + 13);
            } else if ((arrayMatch[i].charCodeAt(j) >= 110) && (arrayMatch[i].charCodeAt(j)) <= 122) {
                newWord += String.fromCharCode(arrayMatch[i].charCodeAt(j) - 13);
            } else
                newWord += arrayMatch[i][j];
        }
        decryptedArray.push(newWord);
        newWord = '';
    }
    console.log(decryptedArray.join(''));
}

solve(["<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>"]);
