function sortLetters(string, boolean) {
    var inputLowercaseArray = string.toLowerCase().split(""),
        originalInputArray = string.split(""),
        length = string.length,
        objectString = {},
        result = "",
        sortedLowercase;

    for (i in inputLowercaseArray) {
        objectString[inputLowercaseArray[i]] = originalInputArray[i];
    }

    sortedLowercase = inputLowercaseArray.sort();

    if (boolean !== true) {
        sortedLowercase = sortedLowercase.reverse();
    }
    for (i in sortedLowercase) {
        result += objectString[inputLowercaseArray[i]];
    }


    console.log(result);

}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);



//function sortLetters(word, boolean){
//    var charArray= [];
//    var result = "";
//    if (boolean === true) {
//        for (var i = 0; i < word.length; i++) {
//           charArray[i] = word[i];
//            charArray.sort(function(x,y){
//              return x.toLowerCase() > y.toLowerCase()
//            })
//        }
//    }else{
//        for (var i = 0; i < word.length; i++) {
//            charArray[i]=word[i];
//            charArray.sort(function(x,y){
//                return x.toLowerCase() < y.toLowerCase();
//            })
//        }
//    }
//    for (var ch in charArray) {
//        result+=charArray[ch];
//    }
//    console.log(result);
//}
//sortLetters('HelloWorld', true);
//sortLetters('HelloWorld', false);








//function sortLetters(string, boolean) {
//    
//    var sorted = string.split("").map(String);
//    
//    if (boolean === true){
//        sorted = sorted.sort(alphabetical).join("");
//    }
//    else if (boolean === false) {
//        sorted = sorted.sort(alphabetical).reverse().join("");
//    }
//    console.log(sorted);
//    
//    function alphabetical(a, b)
//    {
//        var A = a.toLowerCase();
//        var B = b.toLowerCase();
//        if (A < B){
//            return -1;
//        }else if (A > B){
//            return  1;
//        }else{
//            return 0;
//        }
//    }
//}
//sortLetters('HelloWorld', false);