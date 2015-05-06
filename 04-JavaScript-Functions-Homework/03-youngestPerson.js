function findYoungestPerson(array) {
    var smartphonePeople = {};

    smartphonePeople = array.filter(function checkSmartPhones(person) {
        if (person.hasSmartphone === true) {
            return person;
        }
    });
    
    smartphonePeople.sort(function (a, b) {
        return a.age - b.age;
    });
    
    console.log('The youngest person with a smartphone is ' + smartphonePeople[0].firstname + ' ' +  smartphonePeople[0].lastname +
               ' - age: ' + smartphonePeople[0].age);

}

var people = [{ firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false }, 
              { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
              { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
              { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);

 