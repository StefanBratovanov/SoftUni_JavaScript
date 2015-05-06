function solve(arguments) {
    var input = arguments[0],
        digits = [],
        i;

    digits = input.match(/\d+/g);
    for (i in digits) {
        digits[i] = Number(digits[i]).toString(16).toUpperCase();
        if (digits[i].length < 4) {
            var neededZeros = 4 - digits[i].length;
            var str = Array(neededZeros + 1).join('0')
            digits[i] = str.concat(digits[i]);
        }
            digits[i] = '0x'.concat(digits[i]);
    }
    console.log(digits.join('-'));
}


solve(['5tffwj(//*7837xzc2---34rlxXP%$”.']);