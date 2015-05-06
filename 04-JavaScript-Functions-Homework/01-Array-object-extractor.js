function extractObjects(array) {
    var objectArray = [];
    array.forEach(function (elem) {
        if (typeof elem === "object" && !Array.isArray(elem)) {
            objectArray.push(elem);
        }
    });

    console.log(objectArray);
}
extractObjects([
    "Pesho",
    4,
    4.21,
    {
        name: 'Valyo',
        age: 16
    },
    {
        type: 'fish',
        model: 'zlatna ribka'
    },
    [1, 2, 3],
    "Gosho",
    {
        name: 'Penka',
        height: 1.65
    }
]);