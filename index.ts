interface User {
    [key:string]:any;
    age:Number;
    name:String;
    occupation:String;
}
let persons :UsersAndAdmins [] =[
    {age:22, name:"Salem", occupation:"instructor" },
    {age:23, name:"Saad", occupation:"police man" },
    {age:24, name:"Saud", occupation:"doctor" }
]

function printPersons (arr: UsersAndAdmins[]){
    for (const person of arr) {
        console.log(person);
    }
    
}
printPersons(persons)

interface Admin {
    [key:string]:any;
    age:Number;
    name:String;
    specialty:String;
}
let Admin1 = {age:44, name:"Ameerah", specialty:"ER" }
let Admin2 = {age:55, name:"Ala", specialty:"AI" }
let Admin3 = {age:66, name:"Abdullah", specialty:"IOT" }

persons.push(Admin1)
persons.push(Admin2)
persons.push(Admin3)

type UsersAndAdmins = User | Admin

function checkPerson (arr: UsersAndAdmins[]){
    for (const person of arr) {
        if ("occupation" in person ){
            console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation} >> This is User`);
        }else{
            console.log(`Name: ${person.name}, Age: ${person.age}, Specialty: ${person.specialty} >> This is Admin`);
        }
    }
    
}
checkPerson(persons)

function changeAge (age : number, name: string){
    for (const person of persons) {
        if (person.name == name){
            console.log(`The age of the user ${name} will be change from ${person.age } to ${age} `);
            person.age = age
        }
        console.log(person);
        
    }
}
changeAge(12, 'Salem')

