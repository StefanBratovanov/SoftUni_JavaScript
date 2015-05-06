function solve(arguments) {
    var i,
        currentLine = [],
        result = {},
        fileExtension,
        file,
        memory,
        output = {};

    for (i in arguments) {
        currentLine = arguments[i].split(' ');
        file = currentLine[0];
        fileExtension = currentLine[1];
        memory = Number((currentLine[2].match(/[\d\.\d]+/))[0]);

        if (!result[fileExtension]) {
            result[fileExtension] = {
                files: [],
                memory: 0
            }
        }
        result[fileExtension].files.push(file);
        result[fileExtension].memory += memory;
    }

    var sortedExts = Object.keys(result).sort();
    
    for (i in sortedExts) {
        var sortedExt = sortedExts[i];
        output[sortedExt] = {
            files: result[sortedExt].files.sort(),
            memory: result[sortedExt].memory.toFixed(2)
        }
    }

    console.log(JSON.stringify(output));
}


solve(['sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
])






//function solver(input) {
//    var currentInput, output = {};
//    input.forEach(function(el) {
//        currentInput = el.split(/\s+/);
//        if (!output[currentInput[1]]) {
//            output[currentInput[1]] = {};
//            output[currentInput[1]].files = [];
//            output[currentInput[1]].memory = 0;
//        }
//
//        output[currentInput[1]].files.push(currentInput[0]);
//        output[currentInput[1]].memory += Number(currentInput[2].substring(0, currentInput[2].length - 2));
//    });
//
//    for (var el in output) {
//        output[el].memory = output[el].memory.toFixed(2);
//        output[el].files.sort();
//    }
//
//    function sortObj(obj) {
//        var sorted = {}, keys = Object.keys(obj).sort();
//        for (var el in keys) {
//           sorted[keys[el]] = obj[keys[el]];
//        }
//
//        return sorted;
//    }
//
//    output = sortObj(output);
//
//    console.log(JSON.stringify(output));
//}