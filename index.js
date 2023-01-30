var persons = [
    { age: 22, name: "Salem", occupation: "instructor" },
    { age: 23, name: "Saad", occupation: "police man" },
    { age: 24, name: "Saud", occupation: "doctor" }
];
function printPersons(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var person = arr_1[_i];
        console.log(person);
    }
}
printPersons(persons);
var Admin1 = { age: 44, name: "Ameerah", specialty: "ER" };
var Admin2 = { age: 55, name: "Ala", specialty: "AI" };
var Admin3 = { age: 66, name: "Abdullah", specialty: "IOT" };
persons.push(Admin1);
persons.push(Admin2);
persons.push(Admin3);
function checkPerson(arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var person = arr_2[_i];
        if ("occupation" in person) {
            console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Occupation: ").concat(person.occupation, " >> This is User"));
        }
        else {
            console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Specialty: ").concat(person.specialty, " >> This is Admin"));
        }
    }
}
checkPerson(persons);
function changeAge(age, name) {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var person = persons_1[_i];
        if (person.name == name) {
            console.log("The age of the user ".concat(name, " will be change from ").concat(person.age, " to ").concat(age, " "));
            person.age = age;
        }
        console.log(person);
    }
}
changeAge(12, 'Salem');
