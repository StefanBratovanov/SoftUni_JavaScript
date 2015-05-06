function manipulateArray(arr) {
    var filteredArr = arr.filter(removeNonDigits),
        maxNumber,
        minNumber,
        mostFrequentNumber;

    function removeNonDigits(element) {
        if (typeof element === "number") {
            return true;
        }
    }

    filteredArr.sort(function (a, b) {
        return a > b;
    })
    maxNumber = filteredArr[filteredArr.length - 1];
    minNumber = filteredArr[0];

    function findMostFrequent(arr) {
        var counter = 1,
            maxCounter = 1,
            mostFreq = arr[0];

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                counter++;
                if (counter > maxCounter) {
                    maxCounter = counter;
                    mostFreq = arr[i];
                }
            } else counter = 1;
        }
        return mostFreq;
    }

    console.log('Min number: ' + minNumber);
    console.log('Max number: ' + maxNumber);
    console.log('Most frequent number: ' + findMostFrequent(filteredArr));
    console.log(filteredArr.reverse());
}

manipulateArray(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);
manipulateArray([0, 0, 05, -10, "true", "false", 'iver', { height: 183, points: "30000"}, [3, 3, 3, 0]], "undefined", "number");




//var Arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
//
//var newArr = [];
//newArr = Arr.filter(function (element) { return !isNaN(element); });
//newArr.sort(function(a, b){return b-a});
//
//var frequency = {};
//var max = 0; 
//var result;
//for(var freq in newArr) {
//        frequency[newArr[freq]]=(frequency[newArr[freq]] || 0)+1; 
//        if(frequency[newArr[freq]] > max) {
//                max = frequency[newArr[freq]];
//                result = newArr[freq];    
//        }
//}
//
//console.log('Min Number: ' + newArr.slice(-1));
//console.log('Max Number: ' + newArr.slice(0, 1));
//console.log('Most frequent number: ' + result);
//console.log(newArr);