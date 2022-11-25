const person={
    name:"arati",
    age:23,
    "person hobbies":["sleep", "read", "play"]
}

// console.log(person.perspn hobbies);    //error
console.log(person["person hobbies"]);

//add email:"test@gmil.com"

const key="email";
// person.key="test@gmail.com";
// console.log(person);

// person["key"]="test@gmail.com";
// console.log(person);

person[key]="test@gmail.com";
// person["email"]="test@gmail.com";
console.log(person);

