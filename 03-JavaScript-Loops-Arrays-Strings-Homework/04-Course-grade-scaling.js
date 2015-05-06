function displayPassedEaxmStudents(students) {
    var studentsPassed = [];

    students.forEach(function (person) {
        person.score = person.score / 10 + person.score;
        if (person.score >= 100) {
            person.hasPassed = true;
        } else person.hasPassed = false;
    });

    studentsPassed = students.filter(function checkPassed(person) {
        if (person.hasPassed === true) {
            return person;
        }
    });

    studentsPassed.sort(function (a, b) {
        return a.name > b.name;
    });

    console.log(JSON.stringify(studentsPassed));
}


displayPassedEaxmStudents([
    {
        'name': 'Пешо',
        'score': 91
    },
    {
        'name': 'Лилия',
        'score': 290
    },
    {
        'name': 'Алекс',
        'score': 343
    },
    {
        'name': 'Габриела',
        'score': 400
    },
    {
        'name': 'Жичка',
        'score': 70
    }
]);