function solve(arguments) {
    var i,
        conditonLine,
        students = [],
        trainers = [],
        objects = [],
        criteriaStudents,
        criteriaTrainers,
        output = {},
        outputStudents = [],
        outputTrainers = [];

    conditonLine = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        objects.push(JSON.parse(arguments[i]));
    }
    criteriaStudents = conditonLine.split('^')[0].trim();
    criteriaTrainers = conditonLine.split('^')[1].trim();

    objects.forEach(function (elem) {
        if (elem.role === "student") {
            students.push(elem);
        } else if (elem.role === "trainer") {
            trainers.push(elem);
        }
    });

    //trainers sort
    trainers.sort(function (a, b) {
        if (a.courses.length > b.courses.length) {
            return 1;
        } else if (a.courses.length < b.courses.length) {
            return -1;
        }
        if (a.lecturesPerDay > b.lecturesPerDay) {
            return 1;
        } else if (a.lecturesPerDay < b.lecturesPerDay) {
            return -1;
        } else return 0
    })

    //srudents sort
    if (criteriaStudents === 'name') {
        students.sort(function (a, b) {
            if (a.firstname > b.firstname) {
                return 1;
            } else if (a.firstname < b.firstname) {
                return -1;
            }
            if (a.lastname > b.lastname) {
                return 1;
            } else if (a.lastname < b.lastname) {
                return -1;
            } else return 0
        })

    } else if (criteriaStudents === 'level') {
        students.sort(function (a, b) {
            if (a.level > b.level) {
                return 1;
            } else if (a.level < b.level) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            } else if (a.id < b.id) {
                return -1;
            } else return 0
        })
    }

    //create  object Students 
    students.forEach(function (elem) {
        outputStudents.push(buildStudent(elem))
    });

    //create  object Trainers 
    trainers.forEach(function (elem) {
        outputTrainers.push(buildTrainer(elem))
    });

    //create output object 
    output = {
        students: outputStudents,
        trainers: outputTrainers
    }

    console.log(JSON.stringify(output));

    //build Student Object with the wanted fields
    function buildStudent(args) {
        return {
            id: args.id,
            firstname: args.firstname,
            lastname: args.lastname,
            averageGrade: calculateAverage(args.grades),
            certificate: args.certificate
        }
    }

    //build Trainer Object with the wanted fields
    function buildTrainer(args) {
        return {
            id: args.id,
            firstname: args.firstname,
            lastname: args.lastname,
            courses: args.courses,
            lecturesPerDay: args.lecturesPerDay
        }
    }

    function calculateAverage(args) {
        var sum = 0;
        for (var i = 0; i < args.length; i++) {
            sum += Number(args[i]);
        }
        var average = (sum / args.length).toFixed(2);
        return average;
    }
}


solve(['level ^ courses',
       '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
       '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
       '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
       '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
       '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
])