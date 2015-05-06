function solve(args) {
    var i,
        currentLine,
        name,
        course,
        grade,
        visits,
        data = {},
        output = {};

    for (i in args) {
        currentLine = args[i].split(/[|]+/g);
        name = currentLine[0].trim();
        course = currentLine[1].trim();
        grade = Number(currentLine[2].trim());
        visit = Number(currentLine[3].trim());

        if (!data[course]) {
            data[course] = {
                grades: [],
                visits: [],
                students: []
            }
        }
        data[course].grades.push(grade);
        data[course].visits.push(visit);

        var stdentsArray = data[course].students;
        
        if (stdentsArray.indexOf(name) !== -1) {
            continue;
        } else {
            data[course].students.push(name);
        }


//        if (stdentsArray.indexOf(name) === -1) {
//            data[course].students.push(name);
//
//        }
    }

    var sortedCourses = Object.keys(data).sort();

    sortedCourses.forEach(function (course) {

        output[course] = {
            avgGrade: calculateAvg(data[course].grades),
            avgVisits: calculateAvg(data[course].visits),
            students: data[course].students.sort()
        }
    });


    function calculateAvg(ars) {
        var avg = 0;
        for (var i in ars) {
            avg += ars[i];
        }
        return Number((Number((avg / ars.length).toFixed(2))).toString())
        
//      return avg = Number(avg.toFixed(2));
    }
    console.log(JSON.stringify(output));
}

solve(['Peter Nikolov | PHP | 5.50 | 8',
'Maria Ivanova | Java | 5.83 | 7',
'Ivan Petrov | PHP | 3.00 | 2',
'Ivan Petrov | C# | 3.00 | 2',
'Peter Nikolov | C# | 5.50 | 8',
'Maria Ivanova | C# | 5.83 | 7',
'Ivan Petrov | C# | 4.12 | 5',
'Ivan Petrov | PHP | 3.10 | 2',
'Peter Nikolov | Java | 6.00 | 9',
])