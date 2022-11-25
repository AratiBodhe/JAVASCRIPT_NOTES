//object (reference type)
//object store the data in key value pair
//object do not have index

//how to create array
const person={
    name:"arati",
    age:23,
    hobbies:["sleep", "read", "play"]
}
console.log(person);
//how to access data from object
console.log(person.name);
console.log(person["age"]);

//how to add key value pair in object
// person.gender="female";    //gender added to person object

//add key and value using bracket notation
person["gender"]="FEMSLE"
console.log(person);