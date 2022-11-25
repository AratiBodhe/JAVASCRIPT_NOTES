const person={
    name:"arati",
    age:23,
    "person hobbies":["sleep", "read", "play"]
}

//iterating object using for in loop

for(key in person){
    // console.log(key);

    //console.log(person.key)     (it checks person obj, if key exists or not, key does not exist in person gives undefined )
    console.log(`${key} = ${person[key]}`)
}

//Object.key gives an array

console.log(typeof Object.keys(person));// object
let val=Array.isArray(Object.keys(person));
console.log(val);

//for of loop

for (key of Object.keys(person)){
    console.log(person[key]);
}