//object destructuring

const Person={
    name:"Arati",
    gender:"Female",
    age:80,
};

// function printDetails(obj){
// console.log(obj.name);
// console.log(obj.gender);
// };
// printDetails(Person);

function printDetails({name,gender,myAge}){
    console.log(name);
    console.log(gender);
    console.log(myAge);
}
printDetails(Person);


